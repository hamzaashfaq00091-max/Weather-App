// ================================
// DOM ELEMENTS
// ================================

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const feelsLike = document.getElementById("feelsLike");
const weatherIcon = document.getElementById("weatherIcon");

const loading = document.querySelector(".loading");
const error = document.querySelector(".error");

const forecastContainer = document.getElementById("forecastContainer");

const historyList = document.getElementById("historyList");

const celsiusBtn = document.getElementById("celsiusBtn");
const fahrenheitBtn = document.getElementById("fahrenheitBtn");



// api configuration

const API_KEY="277f1aac6d1ab06e62c4d743786d4603";

const CURRENT_WEATHER_URL =
`https://api.openweathermap.org/data/2.5/weather`;

const FORECAST_URL =
`https://api.openweathermap.org/data/2.5/forecast`;

    let SearchHistory=[];


searchBtn.addEventListener("click",function(){

    const city=cityInput.value.trim();

    if(city===""){
        alert("Please enter a city name.");
        return;
    }
    getWeather(city);

    cityInput.value="";
});

cityInput.addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        searchBtn.click();

    }

});

async function getWeather(city){

    loading.classList.remove("hidden");
    error.classList.add("hidden");

    try{
         const url = `${ CURRENT_WEATHER_URL}?q=${city}&appid=${API_KEY}&units=metric`;

         const response=await fetch(url);

         const data= await response.json();

         if(data.cod!=200){
            error.classList.remove("hidden");
            return;
         }

         DisplayWeather(data);
         getForecast(city);

         savesearch(city);
         displayHistory()
         console.log("City:", data.name);
console.log("Temperature:", data.main.temp);
console.log("Humidity:", data.main.humidity);
console.log("Feels Like:", data.main.feels_like);
console.log("Wind Speed:", data.wind.speed);
console.log("Description:", data.weather[0].description);
console.log("Icon:", data.weather[0].icon);
    }

  catch(err){

    console.error("Error fetching weather data:", err);

    error.classList.remove("hidden");

}
    finally{
        loading.classList.add("hidden");
    }

}


function DisplayWeather(data){

    cityName.textContent = data.name;

    temperature.textContent =
    `${Math.round(data.main.temp)}°C`;

    description.textContent =
    data.weather[0].description;

    humidity.textContent =
    `${data.main.humidity}%`;

    windSpeed.textContent =
    `${(data.wind.speed * 3.6).toFixed(1)} km/h`;

    feelsLike.textContent =
    `${Math.round(data.main.feels_like)}°C`;

    const icon = data.weather[0].icon;

    weatherIcon.src =
    `https://openweathermap.org/img/wn/${icon}@2x.png`;

    weatherIcon.alt =
    data.weather[0].description;

}

async function getForecast(city){
    try{
        const url = `${FORECAST_URL}?q=${city}&appid=${API_KEY}&units=metric`;
        const response=await fetch(url);
        const data=await response.json();
        console.log(data);
        DisplayForecast(data);
    }
    catch(err){
        console.log(err);
    }
}


function DisplayForecast(data){

    forecastContainer.innerHTML = "";

    const dailyData = data.list.filter(item =>
        item.dt_txt.includes("12:00:00")
    );

    dailyData.forEach(day => {

        const card = document.createElement("div");

        card.classList.add("forecast-card");

        const date = new Date(day.dt_txt);

        const dayName =
        date.toLocaleDateString("en-US", {
            weekday: "short"
        });

        const icon = day.weather[0].icon;

        const temp =
        Math.round(day.main.temp);

        card.innerHTML = `
            <h3>${dayName}</h3>
            <img src="https://openweathermap.org/img/wn/${icon}@2x.png">
            <p>${temp}°C</p>
        `;

        forecastContainer.appendChild(card);

    });
};


    function savesearch(city){

        if(SearchHistory.includes(city)){
            return;
        }

        SearchHistory.push(city);

        localStorage.setItem(
            "WeatherHistory",
            JSON.stringify(SearchHistory)
        );

    }


    function loadHistory(){
        const storedhistory=localStorage.getItem("WeatherHistory");

        if(storedhistory){
            SearchHistory=JSON.parse(storedhistory);
            displayHistory();
        }
    }

    function displayHistory(){

        historyList.innerHTML="";

        SearchHistory.forEach(city=>{
            const li = document.createElement("li");
            li.textContent=city;
             li.addEventListener("click",()=>{
                cityInput.value=city;
                getWeather(city);
             })
             historyList.appendChild(li);
        })
    };
    loadHistory();
