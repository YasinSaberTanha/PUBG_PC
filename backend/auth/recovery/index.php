<?php

require_once "../../functions/db.php";
//require_once "../../functions/sms.php";

if (strlen($_POST["phone"]) == 11) {
    $validition = API("SELECT TIMEDIFF(date_validition, NOW()) AS time_left FROM users WHERE phone = ?", [$_POST["phone"]]);
    $validition_code = rand(100000, 999999);

    if (boolval($validition)) {
        if ($validition[0]->time_left > "00:00:00") {

            echo json_encode(["status" => true, "time_left" => $validition[0]->time_left]);
        } else {
            API(
                "UPDATE users SET validition_code = $validition_code, date_validition = ADDDATE(NOW(), INTERVAL 10 MINUTE) WHERE phone = ?",
                [$_POST["phone"]]
            );
            //SMS($validition_code, $_POST["phone"]);
            echo json_encode(["status" => true, "time_left" => "00:10:00"]);
        }
    } else {
        echo json_encode("حساب کاربری با این شماره " . $_POST["phone"] . " وجود ندارد");
    }
}
