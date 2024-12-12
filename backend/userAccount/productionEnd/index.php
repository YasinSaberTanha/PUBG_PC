<?php

require_once "../../../vendor/autoload.php";
require_once "../../functions/db.php";
require_once "../../functions/dotenv.php";
require_once "../../functions/jwt.php";


$userId = JWT($_COOKIE["Token_User"])->user_id;

$user = API("SELECT user_type FROM users WHERE user_id = ?;", [$userId]);

if ($user[0]->user_type != "user") {

    if (boolval($_FILES) && !in_array($_FILES["id_image"]["type"], ["image/png", "image/jpg", "image/jpeg"])) {
        exit;
    }

    if (boolval($_FILES) && $_FILES["id_image"]["size"] > 3000000) {
        exit;
    }

    $id_image = date("Y-n-d_") . rand(10000, 99999) . "." . substr($_FILES["id_image"]["type"], -4);

    $file1 = move_uploaded_file(
        $_FILES["id_image"]["tmp_name"],
        dirname(dirname(dirname(__DIR__))) . "\\public\\rooms\\" . $id_image
    );


    if (count($_FILES) == 2) {
        $winner_photo = date("Y-n-d_") . rand(10000, 99999) . "." . substr($_FILES["winner_photo"]["type"], -4);

        $file2 = move_uploaded_file(
            $_FILES["winner_photo"]["tmp_name"],
            dirname(dirname(dirname(__DIR__))) . "\\public\\rooms\\" . $winner_photo
        );
    } else {
        $winner_photo = null;
    }


    if ($file1) {
        API(
            "UPDATE rooms SET original_id = ?, id_image = ?, winner_photo = ?, room_end = 0 WHERE user_id = ? AND room_end = 1;",
            [$_POST["original_id"], $id_image, $winner_photo, $userId]
        );

        echo json_encode(["status" => true, "message" => "اطلاعات ثبت شد"]);
    }
}
