<?php
session_start();
$link =mysqli_connect("mfcorrigo.se.mysql", "mfcorrigo_se", "ei7Ph6Np", "mfcorrigo_se") or die("Error " . mysqli_error($link));
// mysqli_set_charset($link, "utf8");
$query="SELECT * FROM projects";
$result=$link->query($query) or trigger_error($mysqli->error." [$query]");

// create json from the database
$rows = array();
while ($row = $result->fetch_array(MYSQLI_ASSOC)) {
	$rows[] = $row;
}
// builds the model from json
echo "<script>";
echo "var buildingsJson = " . json_encode($rows);
echo "</script>";
/* free result set */
$result->free();
/* close connection */
mysqli_close($link);
?>
<html lang="en" ng-app="mfcorrigoApp">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<link type="text/css" rel="stylesheet" media="screen" href="maincss.css" />
	<!-- Bootstrap -->
	<link href="libs/bootstrap-3.1.1-dist/css/bootstrap.min.css" rel="stylesheet" media="screen">
	<link href="libs/bootstrap-3.1.1-dist/css/bootstrap-responsive.css" rel="stylesheet">		
	<title>MFCORRIGO</title>
</head>
<body>
	<div class="container">
		<div class="masthead header">	
			<ul class="nav nav-justified">
				<li class="active"><a href="#/">Start</a></li>
				<li><a href="#/services">Tjänster</a></li>
				<li><a href="#/projects" class="dropdown-toggle" data-toggle="dropdown">Tidigare Projekt</a>						
					<ul class="dropdown-menu" role="menu" data-toggle="dropdown">
						<li><a href="#" id="dropdownMenu">Våra byggnader</a></li>
						<li><a href="#" id="dropdownMenu">Tillbyggnader</a></li>
						<li><a href="#" id="dropdownMenu">Badrum</a></li>
						<li><a href="#" id="dropdownMenu">Interiörer</a></li>
						<li><a href="#" id="dropdownMenu">Från bygget</a></li>
					</ul>
				</li>
				<li><a href="#/about">Om oss</a></li>
				<li><a href="#/contact">Kontakta oss</a></li>
			</ul>
		</div>	
		<div id="content">
			<div ng-view></div>
		</div>

		<center>
			<div id="footer">
				<div class="footer">
					<p><h6><span class="copyrigt">&copy; 2013</span>
						<span class="kontaktinfo">MFcorrigo AB
							<a href="mailto:mfcorrigo@gmail.com"> mfcorrigo@gmail.com</a>
							Tel: 073 375 76 30
						</span>
					</h6></p>
				</div>
			</div>
		</center>
	</div>
	<script src="http://code.jquery.com/jquery-2.1.0.min.js"></script>
	<script src="http://code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
	<script src="libs/bootstrap-3.1.1-dist/js/bootstrap.min.js"></script>
	<script src="libs/angular-1.2.14-dist/angular.min.js"></script>
	<script src="libs/angular-1.2.14-dist/angular-route.min.js"></script>
	<script src="libs/angular-1.2.14-dist/angular-animate.min.js"></script>
	<script src="app.js"></script>
	<script src="app/views/earlierProjectsView.js"></script>
	<script src="app/views/buildingsView.js"></script>
	<script src="js/model.js"></script>
	<script src="libs/angular-1.2.14-dist/ui-bootstrap-custom-tpls-0.10.0.js"></script>
	<script src="app/controllers/startViewController.js"></script>
</body>
</html>
