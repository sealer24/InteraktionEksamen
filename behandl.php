<?php
// her skabes der kontakt til serveren
include("opendb.php");
// her sørges for at redirekt til den næste side efter post til server
include("urlGet.php");
// her ligges alt data fra submit på siden ind i variable
$Event_Name=$_POST['Event_Name'];
$Event_Phone=$_POST['Event_Phone'];
$Event_City=$_POST['Event_City'];
$Event_Post=$_POST['Event_Post'];
$Event_Email=$_POST['Event_Email'];
$Event_Month=$_POST['Month'];
$Event_Day=$_POST['Day'];
$Event_Event_Comment=$_POST['Event_Comment'];

//her sættes data ind på mySQL server via sql setning
$sql = "INSERT INTO Booking (Event_Name, Event_Phone, Event_City, Event_Post, Event_Email, Month, Day, Event_Comment) VALUES ('.$obstype', '.$obstekst')";

//her lukkes forbindelsen
$conn->close();


?>