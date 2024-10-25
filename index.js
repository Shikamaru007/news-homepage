document.addEventListener("DOMContentLoaded", () => {

    // Function to show the menu for mobile view.
    document.getElementById("menu").addEventListener("click", () => {
        document.body.classList.add("showMobileNav");
    });

    // Function to close the menu for mobile view.
    document.getElementById("closeMenu").addEventListener("click", () => {
        document.body.classList.remove("showMobileNav");
    });
});
