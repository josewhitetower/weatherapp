<template>
  <div class="weather-wrapper">
    <h1>Weather App</h1>
      <h2>{{weather.name}}, {{weather.sys.country}}</h2>
      <h2 id="temperature" >{{weather.main.temp.toFixed(1)}} °C</h2> 

      <img :src="weather.weather[0].icon" :alt="weather.weather[0].description">

      <button @click="temp=!temp">Toggle</button>
    

  </div>
</template>

<script>
export default {
  name: "WeatherApp",
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
      const temperature = document.querySelector("#temperature");
      if (this.temp === false) {
        console.log("Fahrenheit");
        const fahrenheit = this.toFahrenheit(this.weather.main.temp);
        temperature.textContent = `${fahrenheit.toFixed(1)} °F`;
      } else {
        temperature.textContent = `${this.weather.main.temp.toFixed(1)} °C`;
      }
    }
  },
  methods: {
    toFahrenheit(celsius) {
      return celsius * 9 / 5 + 32;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
