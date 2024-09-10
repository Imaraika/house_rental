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

$sql = "SELECT id, name, description, price, status, image_url, location FROM houses";

if (isset($_GET['searchQuery'])) {
  $searchQuery = $_GET['searchQuery'];
  $sql .= " WHERE name LIKE ? OR description LIKE ?";
}

$stmt = $conn->prepare($sql);

if (isset($searchQuery)) {
  $searchTerm = "%" . $searchQuery . "%";
  $stmt->bind_param("ss", $searchTerm, $searchTerm);
}

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
