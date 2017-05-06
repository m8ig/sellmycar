<?php
//date in 'YYYY-MM-DD' format
//$_GET['date'] = '2017-04-29';
$ret = [];
$statuses = [
    ['active' => 1, 'description' => 'Open'],
    ['active' => 1, 'description' => 'Almost full'],
    ['active' => 0, 'description' => 'Full'],
    ['active' => 0, 'description' => 'Closed']
  ];


$timestamp = strtotime($_GET['date']);

for ($a = 0; $a < 7; $a++) {
    $ret[] = [
        'date' => date('Y-m-d', $timestamp),
        'status' => $statuses[rand(0, 3)]
    ];
    $timestamp += 24*60*60;
}

echo json_encode($ret);
