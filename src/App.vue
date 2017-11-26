<template>
   <div id="app" v-if="weather">
    <h1>Weather App</h1>
      <h2>{{weather.name}}, {{weather.sys.country}}</h2>   
         <img :src="weather.weather[0].icon" :alt="weather.weather[0].description">   
      <Temperature 
        :temperature="weather.main.temp" 
        :temperatureMax="weather.main.temp_max" 
        :temperatureMin="weather.main.temp_min"
      />
  </div>
  <div v-else class="loader" ></div>
</template>

<script>
import Temperature from "./components/Temperature";
export default {
  name: "WeatherApp",
  components: {
    Temperature
  },
  data() {
    return {
      weather: undefined
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?appid=7a741b8c0c30634f435a5545b89331e8&units=metric&lat=${lat}&lon=${lng}`;
        fetch(endpoint)
          .then(data => data.json())
          .then(data => {
            this.weather = data;
          });
      });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.loader {
  margin: 20% auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid green; /* Blue */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 0.5s linear infinite;
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
