document.addEventListener("DOMContentLoaded", () => {
    // Dynamically load the navbar
    fetch("nav.html")
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to load navbar");
            }
            return response.text();
        })
        .then((html) => {
            const navbarContainer = document.getElementById("navbar");
            navbarContainer.innerHTML = html;

            const navbar = navbarContainer.querySelector("nav");
            const fixedNavbar = document.getElementById("fixed-navbar");
            const scrollThreshold = 200; // Adjust as needed

            window.addEventListener("scroll", () => {
                if (window.scrollY > scrollThreshold) {
                    navbar.classList.add("visible");
                    fixedNavbar.style.transform = "translateY(-100%)"; // Smooth hide effect
                } else {
                    navbar.classList.remove("visible");
                    fixedNavbar.style.transform = "translateY(0)"; // Show static navbar
                }
            });
        })
        .catch((error) => {
            console.error("Error loading navbar:", error);
        });
});