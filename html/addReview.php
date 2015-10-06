<?php
//Get the review from POST
date_default_timezone_set("America/New_York");
$page = $_REQUEST['page'];
echo "reviews/".$page.".txt";
$file = fopen("reviews/$page.txt","a+");
fwrite($file,$_REQUEST['title']."\n");
fwrite($file,$_REQUEST['rating']."\n");
fwrite($file,$_REQUEST['author']."\n");
fwrite($file,$_REQUEST['text']."\n");
fwrite($file,date("jS M, Y")."\n");
print_r(error_get_last());

//redirect
header("Location: detail.php?page=$page");