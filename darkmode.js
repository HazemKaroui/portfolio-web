let button = document.getElementById("dark-mode-button");
let root = document.querySelector(':root');
let themeIsDark = false;

button.addEventListener("click", switchTheme);
function switchTheme() {
    if (themeIsDark == false) {
        root.style.setProperty('--text-color', 'rgb(255, 255, 255)');
        root.style.setProperty('--accent-color', 'rgb(251, 160, 17)');
        root.style.setProperty('--background-color', 'rgb(20, 33, 61)');
        themeIsDark = true;
    }

    else {
        root.style.setProperty('--text-color', 'rgb(14, 21, 21)');
        root.style.setProperty('--accent-color', 'rgb(124, 124, 125)');
        root.style.setProperty('--background-color', 'rgb(236, 238, 240)');
        themeIsDark = false;
    }
}