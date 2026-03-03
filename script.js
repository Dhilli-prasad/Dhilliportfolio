// Typing Effect
const text = ["Salesforce Specialist", "Data Analyst", "AI & DS Student"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){
  if(count === text.length){
    count = 0;
  }
  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.getElementById("typing").textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(type, 150);
})();

// QR Code
new QRCode(document.getElementById("qrcode"), {
  text: window.location.href,
  width: 200,
  height: 200
});
