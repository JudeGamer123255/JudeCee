document.addEventListener("DOMContentLoaded", () => { 
    const toggle = document.getElementById("theme-toggle");
    const userPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
        document.body.classList.toggle("dark-mode", savedTheme === "dark");
    } else{
        document.body.classList.toggle("dark-mode", userPrefersDark);
    }

    toggle.addEventListener("click", () => {
        const isDark = document.body.classList.toggle("dark-mode");
        localStorage.setItem("theme", isDark ? "dark" : "lisht");
    });
});