<?php

require_once "../../functions/db.php";



echo json_encode(
    API(
        "SELECT map_id, multi_player, input_amount, license_pc, number_players, maximum_player, level_svg FROM rooms WHERE map_id = ?;",
        [$_GET["map_id"]]
    )[0]
);