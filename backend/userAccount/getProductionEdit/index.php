<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";


$userId = JWT($_COOKIE["Token_User"])->user_id;

echo json_encode(API("SELECT room_name, room_id, room_password FROM rooms WHERE room_end = 1 AND user_id = ?;", [$userId])[0]);
