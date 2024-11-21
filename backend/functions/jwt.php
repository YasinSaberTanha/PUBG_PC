<?php



use Firebase\JWT\JWT;
use Firebase\JWT\Key;

function JWT($jwt)
{
    $key = $_ENV["JWT_PASS"];
    $decode = JWT::decode($jwt, new Key($key, 'HS256'));
    return $decode;
}




