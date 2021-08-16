let sidebar = document.querySelector(".sidebar");
let button = document.querySelector("#btn");

button.addEventListener("click", toggleSideBar);

function toggleSideBar(){
    console.log("oui");
    sidebar.classList.toggle("active");
}