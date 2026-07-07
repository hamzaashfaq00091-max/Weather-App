# 🌦️ Weather Forecast App

![HTML](https://img.shields.io/badge/HTML5-orange?logo=html5\&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-blue?logo=css3\&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?logo=javascript\&logoColor=black)
![API](https://img.shields.io/badge/API-OpenWeatherMap-green)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success)

A responsive Weather Forecast Application built using **HTML5**, **CSS3**, and **JavaScript (ES6+)**. The application allows users to search for any city and view real-time weather information along with a 5-day weather forecast using the OpenWeatherMap API.

---

# 📌 Features

* 🔍 Search weather by city name
* 🌡️ Display current temperature
* 🌤️ Show weather description
* 💧 Display humidity
* 💨 Display wind speed
* 🤗 Display "Feels Like" temperature
* 🖼️ Dynamic weather icons
* 📅 5-Day weather forecast
* 💾 Search history using Local Storage
* ⌨️ Search using both button click and Enter key
* ⏳ Loading indicator while fetching data
* ❌ Error handling for invalid city names
* 📱 Fully responsive design

---

# 📋 Key Features

| Feature               | Status |
| --------------------- | :----: |
| Current Weather       |    ✅   |
| 5-Day Forecast        |    ✅   |
| Dynamic Weather Icons |    ✅   |
| Search History        |    ✅   |
| Loading Indicator     |    ✅   |
| Error Handling        |    ✅   |
| Responsive Design     |    ✅   |

---

# 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6+)
* OpenWeatherMap API
* Local Storage

---

# 📂 Project Structure

```text
Weather-App/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── assets/
    └── screenshots/
        ├── home.png
        ├── weather-result.png
        └── forecast.png
```

---

# 📸 Screenshots

Add screenshots of your application inside the `assets/screenshots` folder.

Example:

```md
### Home Page

![Home](assets/screenshots/home.png)

### Weather Result

![Weather Result](assets/screenshots/weather-result.png)

### 5-Day Forecast

![Forecast](assets/screenshots/forecast.png)
```

---

# ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/hamzaashfaq00091-max/weather-app.git
```

> Replace `weather-app` with your actual repository name if it is different.

### 2. Navigate to the project folder

```bash
cd weather-app
```

### 3. Open the project

Simply open `index.html` in your preferred web browser.

No additional installation is required.

---

# 🔑 API Setup

This project uses the **OpenWeatherMap API**.

### Step 1

Create a free account at:

https://openweathermap.org/

### Step 2

Generate your free API key.

### Step 3

Open `script.js` and replace:

```javascript
const API_KEY = "YOUR_API_KEY";
```

with your own OpenWeatherMap API key.

> **Note:** Never upload your real API key to a public GitHub repository.

---

# 🚀 How It Works

1. Enter a city name.
2. Click the **Search** button or press **Enter**.
3. The application sends a request to the OpenWeatherMap API.
4. Current weather information is displayed.
5. A 5-day weather forecast is generated dynamically.
6. The searched city is saved in Local Storage.
7. Previously searched cities remain available after refreshing the page.

---

# 📖 JavaScript Concepts Practiced

This project helped practice the following JavaScript concepts:

* Variables
* Functions
* Objects
* Arrays
* DOM Manipulation
* Event Listeners
* Fetch API
* Async/Await
* Promises
* JSON Parsing
* Error Handling (`try...catch`)
* Template Literals
* Array Methods (`filter`, `forEach`, `includes`)
* Local Storage
* Dynamic HTML Creation
* Date Object
* Responsive User Interface

---

# 🎯 Learning Objectives

The purpose of this project is to:

* Strengthen JavaScript fundamentals
* Learn REST API integration
* Understand asynchronous programming
* Practice DOM manipulation
* Build responsive web applications
* Work with browser Local Storage
* Improve frontend development skills through a real-world project

---

# 🌐 API Used

**OpenWeatherMap API**

* Current Weather API
* 5-Day / 3-Hour Forecast API

Documentation:

https://openweathermap.org/api

---

# 🔮 Future Improvements

* 🌙 Dark Mode
* 📍 Detect user's current location
* 🌡️ Celsius/Fahrenheit toggle
* 📈 Hourly weather forecast
* ❤️ Favorite cities
* 🌍 Multi-language support
* 🎨 Dynamic weather-based backgrounds
* 📊 Air Quality Index (AQI)
* 🌅 Sunrise and Sunset timings

---

# 👨‍💻 Author

**Hamza Ashfaq**

GitHub Profile:

https://github.com/hamzaashfaq00091-max

---

# 📄 License

This project is created for educational and learning purposes.

You are welcome to fork, modify, and improve the project for personal learning.
