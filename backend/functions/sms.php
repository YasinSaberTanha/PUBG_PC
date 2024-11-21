<?php

function SMS($code, $destination)
{

    $postFields = [
        "ApiKey" => "268881-Yasinsaber369",
        "Text" => "War In Room
        کد تایید : $code",
        "Sender" => 50004075007861,
        "Recipients" => [[
            "Destination" => (int)substr($destination, 1),
            "UserTraceId" => (int)$destination,
        ]],
    ];

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => 'http://api.sms-webservice.com/api/V3/SendBulk',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'POST',
        CURLOPT_POSTFIELDS => json_encode($postFields),
        CURLOPT_HTTPHEADER => array(
            'Content-Type: application/json'
        ),
    ));

    $response = curl_exec($curl);

    curl_close($curl);
}
