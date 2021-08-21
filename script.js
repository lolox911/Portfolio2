let sidebar = document.querySelector(".sidebar");
let button = document.querySelector("#btn");

button.addEventListener("click", toggleSideBar);

function toggleSideBar(){
    /*console.log("oui");*/
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

/*const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.bar1');
  
      if (entry.isIntersecting) {
        square.classList.add('.bar-anim');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('.bar-anim');
    });
  });
  
  observer.observe(document.querySelector('.bar'));*/