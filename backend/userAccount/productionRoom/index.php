<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";


$userId = JWT($_COOKIE["Token_User"])->user_id;

$user = API("SELECT user_type, inventory FROM users WHERE user_id = ?;", [$userId]);

if ($user[0]->user_type != "user") {

    switch ($_POST["input_amount"]) {
        case ($_POST["input_amount"] <= 5000):
            $level_svg = "silver.svg";
            break;
        case ($_POST["input_amount"] > 5000 && $_POST["input_amount"] <= 15000):
            $level_svg = "bronze.svg";
            break;
        case ($_POST["input_amount"] >= 15000):
            $level_svg = "gold.svg";
            break;
    }

    $WarrantAmount = $_POST["input_amount"] * 10;

    if ($WarrantAmount < 100000) {
        $WarrantAmount = 100000;
    }

    $guarantee = API("SELECT guarantee FROM admins WHERE user_id = ?", [$userId])[0]->guarantee;

    $budget = ($guarantee + $user[0]->inventory) - $WarrantAmount;

    $moneyLeft = $user[0]->inventory - - ($guarantee - $WarrantAmount);

    $construction_time = API("SELECT construction_time FROM rooms WHERE user_id = ? AND room_end = 0;", [$userId]);

    if (boolval($construction_time)) {
        if (!API(
            "SELECT IF(NOW() > ADDDATE(?, INTERVAL 15 MINUTE), true, false) AS if_time",
            [$construction_time[count($construction_time) - 1]->construction_time]
        )[0]->if_time) {
            echo json_encode("برای ایجاد باید 15 دقیقه از ایجاد روم قبلی گذشته باشد");
            exit;
        }
    }

    if ($budget < 0) {
        $budget = -$budget;
        echo json_encode("مبلق ضمانت $WarrantAmount تومان است و شما ($budget تومان) کم دارید");
        exit;
    }

    if (boolval($_FILES) && !in_array($_FILES["room_image"]["type"], ["image/png", "image/jpg", "image/jpeg"])) {
        exit;
    }

    if (boolval($_FILES) && $_FILES["room_image"]["size"] > 3000000) {
        exit;
    }

    $maximum_player = 100;
    if (in_array($_POST["room_type"], ["M-Livik", "Livik"])) {
        $maximum_player = 48;
    }

    $photoName = date("Y-n-d_") . rand(10000, 99999) . "." . substr($_FILES["room_image"]["type"], -4);

    $file = move_uploaded_file(
        $_FILES["room_image"]["tmp_name"],
        dirname(dirname(dirname(__DIR__))) . "\\public\\rooms\\" . $photoName
    );

    if ($file) {
        if ($guarantee < $WarrantAmount) {
            API("UPDATE admins SET guarantee = $WarrantAmount WHERE user_id = ?", [$userId]);
            API("UPDATE users SET inventory = $moneyLeft WHERE user_id = ?", [$userId]);
        }

        API(
            "INSERT INTO rooms (user_id, room_name, room_id, room_password, room_type, multi_player, maximum_player, input_amount, license_pc, room_image, level_svg, construction_time)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,NOW());",
            [$userId, $_POST["room_name"], $_POST["room_id"], $_POST["room_password"], $_POST["room_type"], $_POST["multi_player"], $maximum_player, $_POST["input_amount"], $_POST["license_pc"], $photoName, $level_svg]
        );

        echo json_encode(["status" => true, "message" => "اطلاعات ثبت شد"]);
    }
}