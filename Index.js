let weather = {
   apiKey: "97a2647c4e3b90ac053eda7729346854"
  fetchWeather : function(city )  {
    fetch(" https://api.openweathermap.org/data/2.5/weather?q=97a2647c4e3b90ac053eda7729346854" 
    +city 
    +"&units=metric&appid=" 
    + this.apiKey
    )
    .then((response) => response.json())
    .then((data) => this.displayWeather (data));

},
 displayWeather: function(data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name,icon,description,temp,humidty,speed)
    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
 }
};

