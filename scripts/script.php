<?php
    // connection variable ->mysqli_connect(host,username,password,dbname);
    $conn=mysqli_connect("localhost","root","","signup") or die(mysqli_error($conn));
    
    if(!isset($_SESSION)){
        session_start();
    } 

    if(isset($_POST['submit'])){
        mysqli_query($conn,
        "insert into users (fname,lname,email,phone,password) 
        values ('{$_POST['fname']}','{$_POST['lname']}','{$_POST['email']}','{$_POST['pnumber']}','{$_POST['confirm-password']}')") or die(mysqli_error($conn));
        header("location:../welcome.html");
    }
?>  