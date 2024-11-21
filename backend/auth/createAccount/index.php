<?php

require_once "../../functions/db.php";
require_once "../../../vendor/autoload.php";
//require_once "../../functions/sms.php";

use Morilog\Jalali\Jalalian as JalaliJalalian;




if (strlen($_POST["password"]) >= 8 && strlen($_POST["phone"]) == 11) {

    $gregorianDate  = new \DateTime(date("Y-m-d H:i:s"));
    $jalaliDate = JalaliJalalian::fromDateTime($gregorianDate, new DateTimeZone('Asia/Tehran'));
    $dateTime = $jalaliDate->format("Y-m-d H:i:s");

    $validition = API("SELECT validition, TIMEDIFF(date_validition, NOW()) AS time_left FROM users WHERE phone = ?", [$_POST["phone"]]);
    $validition_code = rand(100000, 999999);


    if (empty($validition)) {
        API(
            "INSERT INTO users (phone, password, date_login, validition_code, date_validition) VALUES (?, ?, ?, $validition_code, ADDDATE(NOW(), INTERVAL 10 MINUTE));",
            [$_POST["phone"], password_hash($_POST["password"], PASSWORD_DEFAULT), $dateTime]
        );
        //SMS($validition_code, $_POST["phone"]);
        echo json_encode(["status" => true, "time_left" => "00:10:00"]);
    } else {
        if ($validition[0]->validition == 0) {
            if ($validition[0]->time_left > "00:00:00") {
                API(
                    "UPDATE users SET password = ? WHERE phone = ?",
                    [password_hash($_POST["password"], PASSWORD_DEFAULT), $_POST["phone"]]
                );
                echo json_encode(["status" => true, "time_left" => $validition[0]->time_left]);
            } else {
                API(
                    "UPDATE users SET validition_code = $validition_code, date_validition = ADDDATE(NOW(), INTERVAL 10 MINUTE), password = ? WHERE phone = ?",
                    [password_hash($_POST["password"], PASSWORD_DEFAULT), $_POST["phone"]]
                );
                //SMS($validition_code, $_POST["phone"]);
                echo json_encode(["status" => true, "time_left" => "00:10:00"]);
            }
        } else {
            echo json_encode("یک حساب کاربری با این شماره " . $_POST["phone"] . " وجود دارد");
        }
    }
}
