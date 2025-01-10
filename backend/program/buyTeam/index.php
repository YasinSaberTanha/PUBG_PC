<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";


$userId = JWT($_COOKIE["Token_User"])->user_id;

$user = API("SELECT inventory, game_name, game_photo, map_id FROM users WHERE user_id = ?;", [$userId])[0];

$rooms = API("SELECT multi_player, input_amount, number_players, maximum_player FROM rooms WHERE map_id = ? AND room_end = 1;", [$_POST["map_id"]])[0];

if (!boolval($rooms)) exit;

if ($user->map_id == $_POST["map_id"]) {
    echo json_encode(["status" => true]);
    exit;
}

$moneyLeft = $user->inventory - ((int)$rooms->multi_player * $rooms->input_amount);

$roomTeams = API(
    "SELECT taem_id, team_number, empty_place FROM room_teams WHERE map_id = ? AND taem_empty = 1 LIMIT 1;",
    [$_POST["map_id"]]
);

if (!boolval($roomTeams)) {
    echo json_encode("گروه خالی ای در این اتاق یافت نشد");
    exit;
}

$roomTeams = $roomTeams[0];

if ($moneyLeft >= 0) {

    $playerNumber = ($roomTeams->team_number * $rooms->multi_player) + $roomTeams->empty_place;

    API(
        "UPDATE room_players SET user_id = ?, game_photo = ?, game_name = ? WHERE taem_id = $roomTeams->taem_id AND player_number = $playerNumber",
        [$userId, $user->game_photo, $user->game_name]
    );

    API("UPDATE room_teams SET empty_place = $roomTeams->empty_place + 1, taem_empty = 0 WHERE taem_id = $roomTeams->taem_id");

    if ($rooms->number_players + $rooms->multi_player == $rooms->maximum_player) {
        API("UPDATE rooms SET room_end = 2 WHERE user_id = ?", [$userId]);
    }


    API("UPDATE users SET map_id = ? WHERE user_id = ?", [$_POST["map_id"], $userId]);

    API("UPDATE rooms SET number_players = $rooms->number_players + $rooms->multi_player WHERE user_id = ?", [$userId]);

    API("UPDATE users SET inventory = $moneyLeft WHERE user_id = ?", [$userId]);

    $teamCode = [$roomTeams->taem_id, $userId, $_POST["map_id"]];

    foreach ($teamCode as $key => $value) {
        $teamCode[$key] = base_convert($value, 10, 36);
    }

    echo json_encode(["status" => true, "teamCode" => $teamCode[0] . "-" . $teamCode[1] . "-" . $teamCode[2]]);
} else {
    echo json_encode(["status" => false]);
}
