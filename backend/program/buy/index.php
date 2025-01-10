<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";

$userId = JWT($_COOKIE["Token_User"])->user_id;

$user = API("SELECT inventory, game_name, game_photo, map_id FROM users WHERE user_id = ?;", [$userId])[0];

$rooms = API("SELECT multi_player, input_amount, number_players, maximum_player FROM rooms WHERE map_id = ? AND room_end = 1;", [$_POST["map_id"]])[0];

if (!boolval($rooms)) exit;

// if ($user->map_id == $_POST["map_id"]) {
//     echo json_encode(["status" => true, "DG" => true]);
//     exit;
// }

$moneyLeft = $user->inventory - $rooms->input_amount;

if ($moneyLeft >= 0) {



    $roomTeams = API(
        "SELECT map_id, taem_id, team_number, empty_place FROM room_teams WHERE map_id = ? AND (taem_empty = 1 OR taem_empty = 2) LIMIT 1;",
        [$_POST["map_id"]]
    )[0];

    $playerNumber = ($roomTeams->team_number * $rooms->multi_player) + $roomTeams->empty_place;



    API(
        "UPDATE room_players SET user_id = ?, game_photo = ?, game_name = ? WHERE taem_id = $roomTeams->taem_id AND player_number = $playerNumber",
        [$userId, $user->game_photo, $user->game_name]
    );

    if ($roomTeams->empty_place == $rooms->multi_player) {

        API("UPDATE room_teams SET taem_empty = 0 WHERE taem_id = $roomTeams->taem_id");
    } else {

        API("UPDATE room_teams SET empty_place = $roomTeams->empty_place + 1, taem_empty = 2 WHERE taem_id = $roomTeams->taem_id");
    }

    if ($rooms->number_players + 1 == $rooms->maximum_player) {
        API("UPDATE rooms SET room_end = 2 WHERE map_id = ?", [$_POST["map_id"]]);
    }


    API("UPDATE users SET map_id = ? WHERE user_id = ?", [$_POST["map_id"], $userId]);

    API("UPDATE rooms SET number_players = $rooms->number_players + 1 WHERE map_id = ?", [$_POST["map_id"]]);

    API("UPDATE users SET inventory = $moneyLeft WHERE user_id = ?", [$userId]);

    echo json_encode(["status" => true]);
} else {
    echo json_encode(["status" => false]);
}
