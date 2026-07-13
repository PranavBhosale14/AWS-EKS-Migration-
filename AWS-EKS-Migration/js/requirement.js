let p = 0;

const fill = document.getElementById("fill");

const value = document.getElementById("value");

const animation = setInterval(function(){

p++;

fill.style.width = p + "%";

value.innerHTML = p + "%";

if(p >= 85){

clearInterval(animation);

}

},20);