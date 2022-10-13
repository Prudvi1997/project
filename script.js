(() =>{



    const openNaveMenu = document.querySelector(".open_nav-menu"),
    closeNavMenu = document . querySelector(".close-nav-menu"),
    navMenu = document . querySelector(".nav-menu"),
    menuOverlay = document.querySelector(".menu-overlay")
    mediaSize = 991;

    openNaveMenu.addEventListener("click", toggleNav);
    closeNavMenu . addEventListener("click",toggleNav);
    // close nav menu
    menuOverlay.addEventListener("click",toggleNav)
    
    function toggleNav(){
        navMenu.classList.toggle("open");
        menuOverlay.classList.toggle("active");
        document.body.classList.toggle("hidden-scrolling");
    }
    navMenu.addEventListener("click", (event) =>{
     if(event. target.hasAttribute("data-toggle")){
        console.log("true");
     }
     else{
        console.log("false");
     }
    });
})();