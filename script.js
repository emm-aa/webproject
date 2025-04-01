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

const toggleButton = document.getElementById("toggle-dark-mode");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const currentTheme = localStorage.getItem("theme");

// Apply the saved theme on page load
if (currentTheme) {
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (currentTheme === "dark") {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    }
}

// Toggle theme on button click
toggleButton.addEventListener("click", () => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "dark") {
        document.documentElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    }
});