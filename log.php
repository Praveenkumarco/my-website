<?php
// Get the client's IP address
$ip = $_SERVER['REMOTE_ADDR'];

// Use a service to get location based on IP (e.g., ipstack.com)
$apiKey = 'YOUR_IPSTACK_API_KEY';
$location = file_get_contents("http://api.ipstack.com/{$ip}?access_key={e206d6ea542db2f410ec54b2d8bca383}");
$location = json_decode($location);

// Get user-agent details
$userAgent = $_SERVER['HTTP_USER_AGENT'];

// Log details to a file
$log = fopen('visitor_logs.txt', 'a');
fwrite($log, "IP: {$ip}, Location: {$location->city}, User-Agent: {$userAgent}\n");
fclose($log);
?>
