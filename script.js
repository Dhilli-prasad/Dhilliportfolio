// Replace with your deployed GitHub Pages link after hosting
const websiteURL = "https://yourusername.github.io/portfolio/";

// Free QR Code API
const qrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${websiteURL}`;

document.getElementById("qrCode").src = qrAPI;
