let progress = 0;

const fill = document.getElementById("fill");
const percent = document.getElementById("percent");

const timer = setInterval(() => {

progress++;

fill.style.width = progress + "%";
percent.innerHTML = progress + "%";

if(progress >= 90){

clearInterval(timer);

}

},20);