<?php
use Dotenv\Dotenv;
$dotenv = Dotenv::createImmutable($_SERVER["DOCUMENT_ROOT"] . "/PUBG/app");
$dotenv->load();
