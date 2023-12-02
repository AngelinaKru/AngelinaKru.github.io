const apiKey ="af7c183d6a91c621233edcb1a69128fd";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


/*Async functions will always return a value. It makes sure
that a promise is returned and if it is not returned then JavaScript automatically
wraps it in a promise which is resolved with its value */
async function checkWeather(city){
    if(city == undefined) {
        city = "Petrozavodsk";
    }
    // wait until the promise resolves
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    /* The status read-only property of the Response interface
    contains the HTTP status codes of the response. For example,
    200 for success, 404 if the resource could not be found.*/
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        return;
    }
    else {
         /* The json() method of the Response interface takes a
          Response stream and reads it to completion. It returns a promise which
          resolves with the result of parsing the body text as JSON. */
         var data = await response.json();

         //console.log(data);

        /* The Document method querySelector() returns the first Element
        within the document that matches the specified selector, or group of selectors.
        If no matches are found, null is returned. */
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";    

        if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
       weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
         weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "images/mist.png";
        }

    // Display the weather card as block
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    }
}

/* When user press the button, the city name (search input)
will be passed to the checkWeather function */
searchButton.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});

checkWeather();