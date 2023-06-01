(function(){
    const BUTTON = document.querySelector(".burgerMenuButton");
    const MENU = document.querySelector(".burgerNav");

    // vores burger menu får en aktiv klasse naar vi klikker på den, og viser dermed menuen
    BUTTON.addEventListener("click", clickHandler);

    function clickHandler() {
        MENU.classList.toggle("burgerNav--show");

        if(MENU.ariaHidden == "false"){
            MENU.setAttribute("aria-hidden", true);
        }
        else{
            MENU.setAttribute("aria-hidden", false);
        }
    }
})()