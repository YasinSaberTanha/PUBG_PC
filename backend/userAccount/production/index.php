<?php

require_once "../../functions/db.php";


if (!in_array($_FILES["user_photo"]["type"], ["image/png", "image/jpg", "image/jpeg"]) || !in_array($_FILES["national_card"]["type"], ["image/png", "image/jpg", "image/jpeg"])) {
    exit;
}

if ($_FILES["user_photo"]["size"] > 210000 || $_FILES["national_card"]["size"] > 210000) {
    exit;
}

$photoUser = date("Y-n-d_") . rand(10000, 99999) . "." . substr($_FILES["user_photo"]["type"], -4);

$file1 = move_uploaded_file(
    $_FILES["user_photo"]["tmp_name"],
    dirname(dirname(dirname(__DIR__))) . "\\public\users\\" . $photoUser
);

$photocard = date("Y-n-d_") . rand(10000, 99999) . "." . substr($_FILES["national_card"]["type"], -4);

$file2 = move_uploaded_file(
    $_FILES["national_card"]["tmp_name"],
    dirname(dirname(dirname(__DIR__))) . "\\public\users\\" . $photocard
);

if ($file1 && $file2) {
    API(
        "INSERT INTO a_user_approval (user_id, user_photo, national_card) VALUES (?,?,?);",
        [$_POST["user_id"], $photoUser, $photocard]
    );
    echo json_encode(["status" => true]);
}
