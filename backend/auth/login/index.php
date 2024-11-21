<?php


require_once "../../functions/db.php";
require_once "../../../vendor/autoload.php";
require_once "../../functions/dotenv.php";

use Firebase\JWT\JWT;

if (strlen($_POST["password"]) >= 8 && strlen($_POST["phone"]) == 11) {
    $passUser = API(
        "SELECT user_id, password, user_type, game_id FROM users WHERE phone = ?;",
        [$_POST["phone"]]
    );
    if (boolval($passUser)) {
        if (password_verify($_POST["password"], $passUser[0]->password)) {
            $dataUser = [
                "user_id" => $passUser[0]->user_id,
                "game_id" =>  $passUser[0]->game_id,
            ];
            $jwt = JWT::encode($dataUser, $_ENV["JWT_PASS"], 'HS256');
            echo json_encode(["status" => true, "JWT_token" => $jwt]);
        } else {
            echo json_encode("رمز عبور اشتباه است");
        }
    } else {
        echo json_encode("حساب کاربری با این شماره " . $_POST["phone"] . " وجود ندارد");
    }
}
