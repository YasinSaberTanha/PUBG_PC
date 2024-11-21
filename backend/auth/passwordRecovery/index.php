<?php

require_once "../../functions/db.php";

if (strlen($_POST["password"]) >= 8 && strlen($_POST["validition_code"]) == 6) {

    $validition = API(
        "SELECT IF(?=validition_code, true, false) AS validition, TIMEDIFF(date_validition, NOW()) AS time_left FROM users WHERE phone = ?",
        [$_POST["validition_code"], $_POST["phone"]]
    )[0];

    if ($validition->validition) {

        if ($validition->time_left > "00:00:00") {
            API(
                "UPDATE users SET password = ? WHERE phone = ?",
                [password_hash($_POST["password"], PASSWORD_DEFAULT), $_POST["phone"]]
            );
            echo json_encode(["status" => true]);
        } else {
            echo json_encode("اعتبار کد به پایان رسیده");
        }
    } else {
        echo json_encode("کد وارد شده اشتباه است");
    }
}
