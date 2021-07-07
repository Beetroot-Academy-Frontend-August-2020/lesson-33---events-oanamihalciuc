const toggle = document.querySelector(".toggle");
const links = document.querySelector(".links");

// Hint: active class ONLY added in JavaScript
/* Toggle mobile menu */
function toggleMenu() {
    // has the toggle button been clicked?
    if (links.classList.contains("active")) {
        links.classList.remove("active");
         
        // adds the menu (hamburger) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    } else {
        links.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}

/* Event Listener */
toggle.addEventListener("click", toggleMenu, false);


//I did not manage to make this work. The JS should be correct as I used the one from you and only changed the class name, but I think I am missing something on the CSS code and is hard to compare it with yours are you have a lot of different properties there that might not apply in my case. 