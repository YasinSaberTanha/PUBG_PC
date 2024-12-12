<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";

use Firebase\JWT\JWT;


$userId = JWT($_COOKIE["Token_User"])->user_id;

if (boolval($userId)) {

    $game_photo = API(
        "SELECT game_photo FROM users WHERE user_id = ?;",
        [$userId]
    )[0]->game_photo;

    if ($game_photo == null && !boolval($_FILES)) {
        echo json_encode("عکسی وارد نکرده اید");
        exit;
    }

    if (boolval($_FILES) && !in_array($_FILES["game_photo"]["type"], ["image/png", "image/jpg", "image/jpeg"])) {
        exit;
    }

    if (boolval($_FILES) && $_FILES["game_photo"]["size"] > 210000) {
        exit;
    }

    if (boolval($_FILES) && boolval($game_photo) && file_exists(dirname(dirname(dirname(__DIR__))) . "\\public\users\\" . $game_photo)) {
        unlink(dirname(dirname(dirname(__DIR__))) . "\\public\users\\" .  $game_photo);
    }

    if (boolval($_FILES)) {
        $photoName = date("Y-n-d_") . rand(10000, 99999) . "." . substr($_FILES["game_photo"]["type"], -4);

        $file = move_uploaded_file(
            $_FILES["game_photo"]["tmp_name"],
            dirname(dirname(dirname(__DIR__))) . "\\public\users\\" . $photoName
        );
    } else {
        $photoName =  $game_photo;
        $file = true;
    }

    if ($file) {
        API(
            "UPDATE users SET game_id = ?, game_name = ?, game_photo = ?, card_number = ? WHERE user_id = ?;",
            [$_POST["game_id"], $_POST["game_name"], $photoName, $_POST["card_number"], $userId]
        );

        $dataUser = [
            "user_id" =>  $userId,
            "game_id" =>  $_POST["game_id"],
        ];
        $jwt = JWT::encode($dataUser, $_ENV["JWT_PASS"], 'HS256');
        echo json_encode(["status" => true, "message" => "اطلاعات ثبت شد", "JWT_token" => $jwt]);


        if (boolval(API("SELECT user_id FROM user_approval WHERE user_id = ?;", [$userId]))) {
            API(
                "UPDATE user_approval SET game_name = ?, game_photo = ? WHERE user_id = ?;",
                [$_POST["game_name"], $photoName, $userId]
            );
        } else {
            API(
                "INSERT INTO user_approval (user_id, game_name, game_photo) VALUES (?,?,?);",
                [$userId, $_POST["game_name"], $photoName]
            );
        }
    }
}
