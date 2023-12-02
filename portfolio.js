const weatherButton = document.getElementById("weatherBtn");
const weatherIcon = document.querySelector(".weatherApp");

weatherButton.addEventListener("click", () => {
    if (weatherIcon.style.display === "none") {
        weatherIcon.style.display = "block";
    } else {
        weatherIcon.style.display = "none";
    }
});