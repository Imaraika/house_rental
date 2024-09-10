<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    $name = filter_var($data['name'], FILTER_SANITIZE_STRING);
    $email = filter_var($data['email'], FILTER_VALIDATE_EMAIL);
    $phone = filter_var($data['phone'], FILTER_SANITIZE_STRING);
    $movein_date = filter_var($data['movein_date'], FILTER_SANITIZE_STRING);
    $message = filter_var($data['message'], FILTER_SANITIZE_STRING);

    if ($name && $email && $movein_date) {
        $host = 'localhost';
        $db = 'house_rental';
        $user = 'root';
        $pass = '';

        $mysqli = new mysqli($host, $user, $pass, $db);

        if ($mysqli->connect_error) {
            echo json_encode(["success" => false, "message" => "Database connection failed: " . $mysqli->connect_error]);
            exit();
        }

        $stmt = $mysqli->prepare("INSERT INTO inquiries (name, email, phone, movein_date, message) VALUES (?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $name, $email, $phone, $movein_date, $message);

        if ($stmt->execute()) {
            echo json_encode(["success" => true, "message" => "Inquiry submitted successfully..."]);
        } else {
            echo json_encode(["success" => false, "message" => "Failed to submit inquiry"]);
        }

        $stmt->close();
        $mysqli->close();
    } else {
        echo json_encode(["success" => false, "message" => "Invalid input data"]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Invalid request method"]);
}
?>
