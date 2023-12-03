const weatherButton = document.getElementById("weatherBtn");
const weatherDiv = document.querySelector(".weatherApp");


weatherButton.addEventListener("click", () => {
    console.log("weather button clicked");
    if (weatherDiv.style.display === "none") {
        weatherDiv.style.display = "block";
    } else {
        weatherDiv.style.display = "none";
    }
});