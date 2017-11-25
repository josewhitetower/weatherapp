<template>
  <div class="weather-wrapper" v-if="weather">
    <h1>Weather App</h1>
      <h2>{{weather.name}}, {{weather.sys.country}}</h2>
      <h2 id="temperature" >
        <span>{{weather.main.temp.toFixed(1)}} °C</span> 
         <img :src="weather.weather[0].icon" :alt="weather.weather[0].description">               
      </h2> 
     <div>
        <p id="max">Max: <span> {{weather.main.temp_max.toFixed(1)}} °C</span></p>
        <p id="min">Min: <span> {{weather.main.temp_min.toFixed(1)}} °C</span></p>
     </div>
      <button @click="temp=!temp">°F</button>    
      <Temperature 
        :temperature="weather.main.temp" 
        :temperature-max="weather.main.temp_max" 
        :temperature-min="weather.main.temp_min"
      />
  </div>
  <div v-else class="loader" ></div>
</template>

<script>
import Temperature from "./Temperature";
export default {
  name: "WeatherApp",
  components: {
    Temperature
  },
  data() {
    return {
      weather: undefined,
      temp: true
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const endpoint = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lng}`;
        fetch(endpoint)
          .then(data => data.json())
          .then(data => {
            this.weather = data;
          });
      });
    }
  },
  watch: {
    temp() {
      const temperature = document.querySelector("#temperature span");
      const button = document.querySelector("button");
      const max = document.querySelector("#max span");
      const min = document.querySelector("#min span");
      if (this.temp === false) {
        const fahrenheit = this.toFahrenheit(this.weather.main.temp);
        const fahrenheitMax = this.toFahrenheit(this.weather.main.temp_max);
        const fahrenheitMin = this.toFahrenheit(this.weather.main.temp_min);
        temperature.textContent = `${fahrenheit.toFixed(1)} °F`;
        max.textContent = `${fahrenheitMax.toFixed(1)} °F`;
        min.textContent = `${fahrenheitMin.toFixed(1)} °F`;

        button.textContent = "°C";
      } else {
        temperature.textContent = `${this.weather.main.temp.toFixed(1)} °C`;
        max.textContent = `${this.weather.main.temp_max.toFixed(1)} °C`;
        min.textContent = `${this.weather.main.temp_min.toFixed(1)} °C`;
        button.textContent = "°F";
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loader {
  margin: 0 auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid green; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
