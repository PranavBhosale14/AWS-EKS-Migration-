let progress = 0;

const bar = document.getElementById("progressBar");
const percent = document.getElementById("percent");

const timer = setInterval(() => {

    progress++;

    bar.style.width = progress + "%";

    percent.innerHTML = progress + "%";

    if(progress >= 78){

        clearInterval(timer);

    }

},25);