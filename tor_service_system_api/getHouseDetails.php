<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');  // Allow CORS

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "house_rental";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

$id = intval($_GET['id']);
$sql = "SELECT id, name, description, price, status, location FROM houses WHERE id = $id";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $house = $result->fetch_assoc();

    $imageSql = "SELECT image_url FROM house_images WHERE house_id = $id";
    $imageResult = $conn->query($imageSql);

    $imageUrls = [];
    while ($row = $imageResult->fetch_assoc()) {
        $imageUrls[] = 'http://localhost/house_rental/tor_service_system_api/' . $row['image_url'];
    }

    $house['image_urls'] = $imageUrls;

    echo json_encode($house);
} else {
    echo json_encode([]);
}

$conn->close();
?>
