const menuItems = document.querySelectorAll(".sidebar ul li");
const frame = document.getElementById("frame");

menuItems.forEach(item=>{

    item.addEventListener("click",()=>{

        menuItems.forEach(i=>i.classList.remove("active"));

        item.classList.add("active");

        frame.src=item.dataset.page;

    });

});
function logout(){

localStorage.removeItem("login");

window.location.href="index.html";

}