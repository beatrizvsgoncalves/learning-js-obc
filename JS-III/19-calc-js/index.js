import themeSwitcher from "./themeSwitcher.js";
import copyToClipboard from "./copyToClipboard.js";
import { calculate } from "./calculate.js";
import { keyboard } from "./keyboard.js";

keyboard()
document.getElementById("equal").addEventListener("click", calculate);
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)
document.getElementById('themeSwitcher').addEventListener('click', themeSwitcher)