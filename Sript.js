let prefs = JSON.parse(localStorage.getItem("carrosPrefs")) || { font: 100, contrast: false };

function applyPrefs() {
  document.documentElement.style.fontSize = prefs.font + "%";
  if (prefs.contrast) {
    document.body.setAttribute("data-contrast", "high");
  } else {
    document.body.removeAttribute("data-contrast");
  }
}

function savePrefs() {
  localStorage.setItem("carrosPrefs", JSON.stringify(prefs));
}

document.getElementById("increase-font").addEventListener("click", () => {
  prefs.font = Math.min(150, prefs.font + 10);
  applyPrefs();
  savePrefs();
});

document.getElementById("decrease-font").addEventListener("click", () => {
  prefs.font = Math.max(80, prefs.font - 10);
  applyPrefs();
  savePrefs();
});

document.getElementById("toggle-contrast").addEventListener("click", () => {
  prefs.contrast = !prefs.contrast;
  applyPrefs();
  savePrefs();
});

document.getElementById("reset-prefs").addEventListener("click", () => {
  prefs = { font: 100, contrast: false };
  applyPrefs();
  savePrefs();
});

document.getElementById("year").textContent = new Date().getFullYear();

applyPrefs();
