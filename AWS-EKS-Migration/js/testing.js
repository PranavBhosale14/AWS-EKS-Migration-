let progress = 0;

const bar = document.getElementById("completeBar");
const text = document.getElementById("completeText");

const timer = setInterval(()=>{

progress++;

bar.style.width = progress + "%";

text.innerHTML = progress + "%";

if(progress>=100){

clearInterval(timer);

}

},20);