<?php

require_once "../../functions/db.php";

$players = API("SELECT * FROM room_players WHERE map_id = ?", [$_GET["map_id"]]);
$multi_player = API("SELECT multi_player FROM rooms WHERE map_id = ?", [$_GET["map_id"]])[0]->multi_player;

echo json_encode(["players" => $players, "multi_player" => $multi_player]);
