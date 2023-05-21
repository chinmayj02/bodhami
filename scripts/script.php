<?php
// connection variable ->mysqli_connect(host,username,password,dbname);
$conn = mysqli_connect("localhost", "root", "", "signup") or die(mysqli_error($conn));
// start session
if (!isset($_SESSION)) {
    session_start();
}
// check if form is submitted
if (isset($_POST['submit'])) {
    $password = md5($_POST['confirm-password']);
    $email = $_POST['email'];
    $check = mysqli_query($conn, "select email from users where email='$email'");
    if (mysqli_num_rows($check) > 0) {
        // user already exists
        header("location:../index.html?error=user_exists");
        exit();
    }
    mysqli_query(
        $conn,
        "insert into users (fname,lname,email,phone,password) 
        values ('{$_POST['fname']}','{$_POST['lname']}','{$_POST['email']}','{$_POST['pnumber']}','$password')"
    ) or die(mysqli_error($conn));
    header("location:../welcome.html?user=" . urlencode($email));
}
// get user data to populate welcome.html page after signup
if (isset($_REQUEST['user'])) {
    $user = $_REQUEST['user'];
    $sql = mysqli_fetch_array(mysqli_query($conn, "select fname,lname,phone from users where email='$user'"));
    $myJSON = json_encode($sql);
    echo $myJSON;
}
