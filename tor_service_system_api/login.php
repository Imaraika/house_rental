<?php
session_start();
ini_set('display_errors', 0); // Disable displaying errors directly
error_reporting(E_ALL); 

// Allow CORS and set appropriate headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json");  // Ensure response is JSON

// Database credentials
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "house_rental";

// Create a connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check for connection errors
if ($conn->connect_error) {
    echo json_encode(['success' => false, 'message' => 'Connection failed: ' . $conn->connect_error]);
    exit();
}

// Ensure the request method is POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['success' => false, 'message' => 'Invalid request method']);
    exit();
}

// Get the JSON input
$data = json_decode(file_get_contents('php://input'), true);

// Validate the JSON data
if (json_last_error() !== JSON_ERROR_NONE) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON data']);
    exit();
}

// Make sure email and password are provided
if (empty($data['email']) || empty($data['password'])) {
    echo json_encode(['success' => false, 'message' => 'Email and password are required']);
    exit();
}

$email = $conn->real_escape_string($data['email']);
$password = $conn->real_escape_string($data['password']);

// Query to check if the user exists
$sql = "SELECT id, name, password FROM tenants WHERE email = '$email'";
$result = $conn->query($sql);

// Check if the user exists
if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    
    // Verify the password
    if (password_verify($password, $row['password'])) {
        // Password is correct, return tenant data
        echo json_encode([
            'success' => true,
            'tenant_id' => $row['id'],
            'tenant_name' => $row['name']
        ]);
    } else {
        // Incorrect password
        echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
    }
} else {
    // No such user found
    echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
}

// Close the database connection
$conn->close();
exit(); // Ensure no further code is executed
?>
