let sidebar = document.querySelector(".sidebar");
let button = document.querySelector("#btn");

button.addEventListener("click", toggleSideBar);

function toggleSideBar(){
    console.log("oui");
    sidebar.classList.toggle("active");
}

window.onload = init;

function init(){
    document.getElementById("load").scrollIntoView();
    setTimeout(removeLoad, 3000);
}

function removeLoad(){
    document.getElementById("load").style.display = "none";
}