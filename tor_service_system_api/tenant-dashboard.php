<?php
session_start();

if (!isset($_SESSION['tenant_id'])) {
    header('HTTP/1.1 401 Unauthorized');
    echo json_encode(["success" => false, "error" => "Unauthorized access. Please log in."]);
    exit;
}

// Tenant dashboard content here
echo json_encode(["success" => true, "message" => "Welcome to your dashboard, " . $_SESSION['name']]);
?>
