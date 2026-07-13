let deploy = 0;

const bar = document.getElementById("deployBar");
const text = document.getElementById("deployText");

const timer = setInterval(() => {

    deploy++;

    bar.style.width = deploy + "%";
    text.innerHTML = deploy + "%";

    if(deploy >= 92){

        clearInterval(timer);

    }

},20);