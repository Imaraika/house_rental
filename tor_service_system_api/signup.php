<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Assuming this is part of your registration script
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "house_rental";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]));
}

$data = json_decode(file_get_contents('php://input'), true);

$name = $conn->real_escape_string($data['name']);  // Handle the name field
$email = $conn->real_escape_string($data['email']);
$password = password_hash($conn->real_escape_string($data['password']), PASSWORD_DEFAULT);

// Insert the tenant data, including the name
$sql = "INSERT INTO tenants (name, email, password) VALUES ('$name', '$email', '$password')";

if ($conn->query($sql) === TRUE) {
    echo json_encode(['success' => true, 'message' => 'Registration successful']);
} else {
    echo json_encode(['success' => false, 'message' => 'Error: ' . $conn->error]);
}

$conn->close();
?>
