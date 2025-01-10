<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";


$userId = JWT($_POST["Token_User"])->user_id;

$user = API("SELECT user_id FROM a_user_approval WHERE user_id = ?;", [$userId]);
$user_type = API("SELECT user_type FROM users WHERE user_id = ?;", [$userId])[0]->user_type;
$room_end = API("SELECT room_end FROM rooms WHERE user_id = ? AND room_end = 1 OR room_end = 2 OR room_end = 3;", [$userId]);

if (boolval($user)) {
    if (boolval($room_end)) {
        echo json_encode(["status" => true, "user_type" => $user_type, "room_end" => $room_end[0]->room_end]);
    } else {
        echo json_encode(["status" => true, "user_type" => $user_type, "room_end" => 0]);
    }
} else {
    if (boolval($room_end)) {
        echo json_encode(["status" => false, "user_type" => $user_type, "room_end" => $room_end[0]->room_end]);
    } else {
        echo json_encode(["status" => false, "user_type" => $user_type, "room_end" => 0]);
    }
}
