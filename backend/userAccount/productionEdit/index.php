<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";


$userId = JWT($_COOKIE["Token_User"])->user_id;

$user = API("SELECT user_type FROM users WHERE user_id = ?;", [$userId]);

if ($user[0]->user_type != "user") {
    API(
        "UPDATE rooms SET room_name = ?, room_id = ?, room_password = ? WHERE user_id = ? AND room_end = 1;",
        [$_POST["room_name"], $_POST["room_id"], $_POST["room_password"], $userId]
    );

    echo json_encode(["status" => true, "message" => "اطلاعات ثبت شد"]);
}
