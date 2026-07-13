let build = 0;

const bar = document.getElementById("buildBar");
const text = document.getElementById("buildText");

const loading = setInterval(() => {

    build++;

    bar.style.width = build + "%";
    text.innerHTML = build + "%";

    if(build >= 97){

        clearInterval(loading);

    }

},20);