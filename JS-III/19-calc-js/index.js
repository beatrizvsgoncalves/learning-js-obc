import themeSwitcher from "./js/themeSwitcher.js";
import copyToClipboard from "./js/copyToClipboard.js";
import { calculate } from "./js/calculate.js";
import { keyboard } from "./js/keyboard.js";

keyboard()
document.getElementById("equal").addEventListener("click", calculate);
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)