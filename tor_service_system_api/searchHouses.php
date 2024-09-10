<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "house_rental";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$location = isset($_GET['location']) ? $_GET['location'] : '';

$sql = "SELECT id, name, description, price, status, image_url FROM houses WHERE location LIKE ?";
$stmt = $conn->prepare($sql);
$searchTerm = "%" . $location . "%";
$stmt->bind_param("s", $searchTerm);
$stmt->execute();
$result = $stmt->get_result();

$houses = array();

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $houses[] = $row;
    }
}

echo json_encode($houses);

$stmt->close();
$conn->close();
?>
