<template>  
  <div v-if="loading" class="loader" ></div>
   <el-card id="app" v-else style="position:relative">
      <div slot="header" class="clearfix">
        <h1 class="u-center">Weather App</h1>
      </div>
         <h2 class="u-center">{{weather.name}}, {{weather.sys.country}}
          
           </h2>   
      <div class="coords">
          <p>Lat: {{weather.coord.lat}}</p>
         <p>Lon: {{weather.coord.lon}} </p>
        </div>  
      <div class="more-data">
         <p>Wind: {{weather.wind.speed}} km/h     <i :class="iconClass"  class="wi wi-wind " title="wind direction"  style="font-size:22px"></i> </p>
         <p>Humidity: {{weather.main.humidity}} %</p>        
         <p>Pressure: {{weather.main.pressure}} hpa</p>
      
        
        
      </div>
      <WeatherIcon        
        :icon="weather.weather[0].icon"
      />

      <Temperature 
        :temperature="weather.main.temp" 
        :temperatureMax="weather.main.temp_max" 
        :temperatureMin="weather.main.temp_min"
      />     
  </el-card>
  
</template>

<script>
import Temperature from "./components/Temperature";
import WeatherIcon from "./components/WeatherIcon";
export default {
  name: "WeatherApp",
  components: {
    Temperature,
    WeatherIcon
  },
  data() {
    return {
      weather: [],
      loading: true
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const lat = pos.coords.latitude;
        const lon = pos.coords.longitude;
        const endpoint = `https://api.openweathermap.org/data/2.5/weather?appid=7a741b8c0c30634f435a5545b89331e8&units=metric&lat=${lat}&lon=${lon}`;
        fetch(endpoint)
          .then(data => data.json())
          .then(data => {
            this.weather = data;
            this.loading = false;
          });
      });
    }
  },
  computed: {
    iconClass() {
      return `towards-${this.weather.wind.deg}-deg`;
    }
  }
};
</script>




<<style >


#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
}
.loader {
  margin: 20% auto;
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #2d2f33;  /* Blue */
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

.el-card {
  width: 500px;
  max-width: 100%;
  margin: auto;
}
.u-center {
  text-align: center;
}
.more-data{
  font-size:14px;
  position:absolute;
      bottom: 12px;
}
.coords{
     font-size: 14px;
    position: absolute;
    bottom: 155px;
    right: 98px;
}
</style>