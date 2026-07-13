let value = 0;

const bar = document.getElementById("monitorBar");
const text = document.getElementById("monitorText");

const timer = setInterval(() => {

    value++;

    bar.style.width = value + "%";
    text.innerHTML = value + "%";

    if(value >= 95){

        clearInterval(timer);

    }

},20);