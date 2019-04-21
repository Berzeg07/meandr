<?php
$to = "test@mail.ru";

$name = $_POST['uname'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$text = $_POST['text'];

// Формирование заголовка письма
$subject  = "Заявка с сайта";
$headers  = "From: form@site.ru" . "\r\n";
$headers .= "Reply-To: form@site.ru".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Заявка с сайта site.ru</h2>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$name."</p>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Почта:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Текст обращения:</strong> ".$text."</p>\r\n";


$msg .= "</body></html>";


// отправка сообщения
@mail($to, $subject, $msg, $headers);
?>
