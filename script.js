// Get the form and suggestion section from the page
const form = document.getElementById("weatherForm");
const suggestion = document.getElementById("suggestion");

// Listen for the form submission
form.addEventListener("submit", function (event) {
  // Prevent the page from reloading when the form is submitted
  event.preventDefault();

  // Get the weather value the user selected
  const weather = document.getElementById("weather").value;

  // Get the temperature value the user entered
  const temperature = document.getElementById("temperature").value;

  // Store the message we'll show the user
  let message = "";

  // Check the weather and set an appropriate message
  if (weather === "sunny") {
    message = `☀️ It's sunny! Don't forget your sunglasses and sunscreen.`;
  } else if (weather === "cloudy" || weather === "rainy") {
    // Use the weather variable so the message reflects which condition was selected
    message = `🌂 It's ${weather}! A light jacket might be a good idea.`;
  } else if (weather === "snowy") {
    message = `❄️ It's snowy! Bundle up with a warm coat, gloves, and boots.`;
  } else if (weather === "windy") {
    message = `💨 It's windy! A windbreaker jacket will come in handy.`;
  } else {
    message = `🌤️ Please select a weather condition to get a suggestion.`;
  }

  // Check if the temperature is below 50°F and add an extra suggestion
  if (temperature < 50) {
    message = message + ` 🧥 Also, it's cold out there—make sure to wear a warm jacket!`;
  }

  // Display the message in the suggestion section
  suggestion.textContent = message;
});
