<template>
  <div class="weather-wrapper" v-if="weather">
    <h1>Weather App</h1>
      <h2>{{weather.name}}, {{weather.sys.country}}</h2>
      <h2 id="temperature" >
   
         <img :src="weather.weather[0].icon" :alt="weather.weather[0].description">               
      </h2> 
    
      <Temperature 
        :temperature="weather.main.temp" 
        :temperatureMax="weather.main.temp_max" 
        :temperatureMin="weather.main.temp_min"
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
      weather: undefined
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
