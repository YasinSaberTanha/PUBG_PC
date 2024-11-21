<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/db.php";

use Firebase\JWT\JWT;

if (strlen($_POST["validition_code"]) == 6) {
    $validition = API(
        "SELECT IF(?=validition_code, true, false) AS validition, date_validition, NOW() AS date_now FROM users WHERE phone = ?;",
        [$_POST["validition_code"], $_POST["phone"]]
    )[0];

    if ($validition->validition) {
        if ($validition->date_validition > $validition->date_now) {
            API(
                "UPDATE users SET validition = 1 WHERE phone = ?;",
                [$_POST["phone"]]
            );
            $dataUser = API(
                "SELECT user_id, game_id FROM users WHERE phone = ?;",
                [$_POST["phone"]]
            );
            $jwt = JWT::encode($dataUser, $_ENV["JWT_PASS"], 'HS256');
            echo json_encode(["status" => true, "JWT_token" => $jwt]);
        } else {
            echo json_encode("اعتبار کد به پایان رسیده");
        }
    } else {
        echo json_encode("کد وارد شده اشتباه است");
    }
}
