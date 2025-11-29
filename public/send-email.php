<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get form data
    $data = json_decode(file_get_contents('php://input'), true);

    $name = htmlspecialchars($data['name'] ?? '');
    $email = htmlspecialchars($data['email'] ?? '');
    $phone = htmlspecialchars($data['phone'] ?? '');
    $service = htmlspecialchars($data['service'] ?? '');
    $message = htmlspecialchars($data['message'] ?? '');

    // SMTP Configuration (Hostinger)
    $smtp_host = 'smtp.hostinger.com'; // Jūsų Hostinger SMTP
    $smtp_port = 587; // arba 465 SSL
    $smtp_username = 'YOUR_EMAIL@mozetech.lt'; // Pakeisti į savo email
    $smtp_password = 'YOUR_SMTP_PASSWORD'; // Pakeisti į savo slaptažodį
    $from_email = 'YOUR_EMAIL@mozetech.lt'; // Pakeisti į savo email
    $to_email = 'YOUR_EMAIL@mozetech.lt'; // Email, kur norite gauti užklausas

    // Email subject and body
    $subject = "Nauja užklausa iš MozeTech svetainės";
    $email_body = "
    <html>
    <body style='font-family: Arial, sans-serif;'>
        <h2 style='color: #1a3c30;'>Nauja Užklausa</h2>
        <table style='border-collapse: collapse; width: 100%;'>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f2f2f2; font-weight: bold;'>Vardas:</td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$name</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f2f2f2; font-weight: bold;'>El. paštas:</td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$email</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f2f2f2; font-weight: bold;'>Telefonas:</td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$phone</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f2f2f2; font-weight: bold;'>Paslauga:</td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$service</td>
            </tr>
            <tr>
                <td style='padding: 10px; border: 1px solid #ddd; background: #f2f2f2; font-weight: bold;'>Žinutė:</td>
                <td style='padding: 10px; border: 1px solid #ddd;'>$message</td>
            </tr>
        </table>
    </body>
    </html>
    ";

    // Headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8\r\n";
    $headers .= "From: $from_email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Configure PHP mail to use SMTP
    ini_set('SMTP', $smtp_host);
    ini_set('smtp_port', $smtp_port);
    ini_set('sendmail_from', $from_email);

    // Send email
    if (mail($to_email, $subject, $email_body, $headers)) {
        echo json_encode([
            'success' => true,
            'message' => 'Žinutė sėkmingai išsiųsta!'
        ]);
    } else {
        http_response_code(500);
        echo json_encode([
            'success' => false,
            'message' => 'Nepavyko išsiųsti žinutės. Bandykite dar kartą.'
        ]);
    }
} else {
    http_response_code(405);
    echo json_encode([
        'success' => false,
        'message' => 'Metodas neleidžiamas'
    ]);
}
?>
