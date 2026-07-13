document.getElementById("loginForm").addEventListener("submit",function(e){

e.preventDefault();

const user=document.getElementById("username").value;

const pass=document.getElementById("password").value;

if(user==="admin" && pass==="admin123"){

localStorage.setItem("login","true");

window.location.href="index1.html";

}
else{

document.getElementById("message").innerHTML="Invalid Username or Password";

}

});