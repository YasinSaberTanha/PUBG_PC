<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";

$userId = JWT($_POST["Token_User"])->user_id;

if (boolval($userId)) {
    echo json_encode(
        API(
            "SELECT card_number, game_id, game_name, game_photo, inventory, win  FROM users WHERE user_id = ?",
            [$userId]
        )[0]
    );
}
