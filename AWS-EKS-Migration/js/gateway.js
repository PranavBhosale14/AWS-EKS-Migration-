let progress = 0;

const deploy = document.getElementById("deploy");
const percent = document.getElementById("percent");

const timer = setInterval(() => {

    progress++;

    deploy.style.width = progress + "%";
    percent.innerHTML = progress + "%";

    if(progress >= 94){

        clearInterval(timer);

    }

},20);