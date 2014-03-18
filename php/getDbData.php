<?php
session_start();
$link =mysqli_connect("mfcorrigo.se.mysql", "mfcorrigo_se", "ei7Ph6Np", "mfcorrigo_se") or die("Error " . mysqli_error($link));
mysqli_set_charset($link, "utf8");
$query="SELECT * FROM projects";
$result=$link->query($query) or trigger_error($mysqli->error." [$query]");

// create json from the database
$rows = array();
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
	$rows[] = $row;
}

echo json_encode($rows);

/* free result set */
$result->free();
/* close connection */
mysqli_close($link);
?>