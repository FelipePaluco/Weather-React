function getGradientForWeather(weatherCode) {
  if (weatherCode >= 200 && weatherCode < 300) {
    return 'linear-gradient(to left, #0f2027, #203a43, #2c5364)'; // Thunderstorm
  } else if (weatherCode >= 300 && weatherCode < 400) {
    return 'linear-gradient(to left, #bdc3c7, #2c3e50)'; // Drizzle
  } else if (weatherCode >= 500 && weatherCode < 600) {
    return 'linear-gradient(to left, #00b8ed, #006aed)'; // Rain
  } else if (weatherCode >= 600 && weatherCode < 700) {
    return 'linear-gradient(to left, #e6dada, #274046)'; // Snow
  } else if (weatherCode >= 700 && weatherCode < 800) {
    return 'linear-gradient(to left, #d7d2cc, #304352)'; // Atmosphere
  } else if (weatherCode === 800) {
    return 'linear-gradient(to right, #4FAEFF, #3493EF)'; // Clear
  } else if (weatherCode > 800 && weatherCode < 900) {
    return 'linear-gradient(to right, #2c3e50, #bdc3c7)'; // Clouds
  } else {
    return 'linear-gradient(to right, #bdc3c7, #2c3e50)'; // Default
  }
}

export default getGradientForWeather;
