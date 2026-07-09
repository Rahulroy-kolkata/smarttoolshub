function calculateAge() {

let dob = document.getElementById("dob").value;

if (dob == "") {
    alert("Please Select Date");
    return;
}

let birth = new Date(dob);

let today = new Date();

let age = today.getFullYear() - birth.getFullYear();

let m = today.getMonth() - birth.getMonth();

if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
    age--;
}

document.getElementById("result").innerHTML =
"Your Age is " + age + " Years";

}

function calculateBMI() {

let weight = document.getElementById("weight").value;

let height = document.getElementById("height").value;

if (weight == "" || height == "") {
    alert("Please Fill All Fields");
    return;
}

height = height / 100;

let bmi = weight / (height * height);

document.getElementById("bmiResult").innerHTML =
"Your BMI is " + bmi.toFixed(2);

}
function scrollToTools(){

document.getElementById("tools").scrollIntoView({

behavior:"smooth"

});

}
function calculateEMI(){

let P = parseFloat(document.getElementById("loan").value);

let annualRate = parseFloat(document.getElementById("interest").value);

let N = parseInt(document.getElementById("months").value);

if(isNaN(P) || isNaN(annualRate) || isNaN(N)){
alert("Please Fill All Fields");
return;
}

let R = annualRate / 12 / 100;

let EMI = (P * R * Math.pow(1 + R, N)) /
          (Math.pow(1 + R, N) - 1);

document.getElementById("emiResult").innerHTML =
"Monthly EMI: ₹ " + EMI.toFixed(2);

}
function generatePassword(){

let length = document.getElementById("length").value;

if(length==""){
alert("Please Enter Password Length");
return;
}

let chars="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";

let password="";

for(let i=0;i<length;i++){

password += chars.charAt(Math.floor(Math.random()*chars.length));

}

document.getElementById("passwordResult").innerHTML=password;

}
function calculatePercentage(){

let obtained = parseFloat(document.getElementById("obtained").value);

let total = parseFloat(document.getElementById("total").value);

if(isNaN(obtained) || isNaN(total) || total==0){

alert("Please Enter Valid Marks");

return;

}

let percentage = (obtained/total)*100;

document.getElementById("percentageResult").innerHTML =
"Percentage : " + percentage.toFixed(2) + "%";

}
function calculateGST(){

let amount = parseFloat(document.getElementById("amount").value);

let gst = parseFloat(document.getElementById("gst").value);

if(isNaN(amount) || isNaN(gst)){

alert("Please Fill All Fields");

return;

}

let gstAmount = amount * gst / 100;

let total = amount + gstAmount;

document.getElementById("gstResult").innerHTML =
"GST: ₹" + gstAmount.toFixed(2) +
"<br>Total: ₹" + total.toFixed(2);

}
function calculateDiscount(){

let price = parseFloat(document.getElementById("originalPrice").value);

let discount = parseFloat(document.getElementById("discount").value);

if(isNaN(price) || isNaN(discount)){

alert("Please Fill All Fields");

return;

}

let save = (price * discount) / 100;

let finalPrice = price - save;

document.getElementById("discountResult").innerHTML =
"You Save: ₹" + save.toFixed(2) +
"<br>Final Price: ₹" + finalPrice.toFixed(2);

}
function generateQR(){

let text = document.getElementById("qrText").value;

if(text==""){

alert("Please Enter Text");

return;

}

document.getElementById("qrImage").src =
"https://api.qrserver.com/v1/create-qr-code/?size=200x200&data="
+ encodeURIComponent(text);

}
function searchTools(){

let input = document.getElementById("search").value.toLowerCase();

let tools = document.getElementsByClassName("tool");

for(let i=0;i<tools.length;i++){

let text = tools[i].innerText.toLowerCase();

if(text.indexOf(input)>-1){
tools[i].style.display="block";
}else{
tools[i].style.display="none";
}

}

}
function toggleDarkMode(){

document.body.classList.toggle("dark");

}
window.onscroll = function(){

let btn = document.getElementById("topBtn");

if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
btn.style.display = "block";
}else{
btn.style.display = "none";
}

}

function topFunction(){

window.scrollTo({
top:0,
behavior:"smooth"
});

}
function sendMessage(){

let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;

if(name=="" || email=="" || message==""){
alert("Please Fill All Fields");
return;
}

document.getElementById("contactResult").innerHTML =
"✅ Thank You " + name + "! Your message has been received.";

}
let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    deferredPrompt = e;

    const installBtn = document.getElementById("installBtn");

    if (installBtn) {
        installBtn.style.display = "inline-block";

        installBtn.addEventListener("click", async () => {
            installBtn.style.display = "none";

            deferredPrompt.prompt();

            await deferredPrompt.userChoice;

            deferredPrompt = null;
        });
    }
});

function convertKM(){

let km = parseFloat(document.getElementById("km").value);

if(isNaN(km)){
alert("Please Enter Kilometers");
return;
}

let miles = km * 0.621371;

document.getElementById("kmResult").innerHTML =
km + " KM = " + miles.toFixed(2) + " Miles";

}

function convertMiles(){

let miles = parseFloat(document.getElementById("miles").value);

if(isNaN(miles)){
alert("Please Enter Miles");
return;
}

let km = miles * 1.60934;

document.getElementById("mileResult").innerHTML =
miles + " Miles = " + km.toFixed(2) + " KM";

}
function generateRandom(){

let min = parseInt(document.getElementById("min").value);

let max = parseInt(document.getElementById("max").value);

if(isNaN(min) || isNaN(max)){
alert("Please Enter Both Numbers");
return;
}

if(min >= max){
alert("Maximum Number must be greater than Minimum Number");
return;
}

let random = Math.floor(Math.random() * (max - min + 1)) + min;

document.getElementById("randomResult").innerHTML =
"🎉 Random Number: " + random;

}
function checkPasswordStrength(){

let password = document.getElementById("passwordCheck").value;

let result = document.getElementById("strengthResult");

if(password.length === 0){
result.innerHTML = "Please Enter Password";
return;
}

let strength = 0;

if(password.length >= 8) strength++;
if(/[A-Z]/.test(password)) strength++;
if(/[a-z]/.test(password)) strength++;
if(/[0-9]/.test(password)) strength++;
if(/[^A-Za-z0-9]/.test(password)) strength++;

if(strength <= 2){
result.innerHTML = "🔴 Weak Password";
}
else if(strength <= 4){
result.innerHTML = "🟡 Medium Password";
}
else{
result.innerHTML = "🟢 Strong Password";
}

}
