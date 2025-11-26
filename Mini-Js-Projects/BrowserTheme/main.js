function setTheme(theme) {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
}

function applyTheme() {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(prefersDark ? "dark" : "light");
}

setTheme(localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));

window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => {
    setTheme(e.matches ? "dark" : "light");
});


let btn = document.querySelector(".toggle-btn")
btn.addEventListener("click", () => {
    let newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    setTheme(newTheme);
});

