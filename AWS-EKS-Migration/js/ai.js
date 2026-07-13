let progress = 0;

const bar = document.getElementById("deploy");
const text = document.getElementById("percent");

const timer = setInterval(() => {

progress++;

bar.style.width = progress + "%";

text.innerHTML = progress + "%";

if(progress >= 96){

clearInterval(timer);

}

},20);