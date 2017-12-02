<template>
  <div v-html="getWeatherIcon(icon)" class="u-center"></div>
</template>
<script>
export default {
  props: ["icon"],
  methods: {
    getWeatherIcon(icon) {
      switch (icon) {
        case "01d":
          return "<i class='wi wi-day-sunny'></i>";
          break;
        case "01n":
          return "<i class='wi wi-night-clear'></i>";
          break;
        case "02d":
          return "<i class='wi wi-day-cloudy'></i>";
          break;
        case "02n":
          return "<i class='wi wi-night-alt-cloudy'></i>";
          break;
        case "03d":
          return "<i class='wi wi-day-cloudy'></i>";
          break;
        case "03n":
          return "<i class='wi wi-night-alt-cloudy'></i>";
          break;
        case "04d":
          return "<i class='wi wi-day-cloudy'></i>";
          break;
        case "04n":
          return "<i class='wi wi-night-alt-cloudy'></i>";
          break;
        case "09d":
          return "<i class='wi wi-day-showers'></i>";
          break;
        case "09n":
          return "<i class='wi wi-night-alt-showers'></i>";
          break;
        case "10d":
          return "<i class='wi wi-day-rain'></i>";
          break;
        case "10n":
          return "<i class='wi wi-night-alt-rain'></i>";
          break;
        case "11d":
          return "<i class='wi wi-day-thunderstorm'></i>";
          break;
        case "11n":
          return "<i class='wi wi-night-alt-thunderstorm'></i>";
          break;
        case "13d":
          return "<i class='wi wi-day-snow'></i>";
          break;
        case "13n":
          return "<i class='wi wi-night-alt-snow'></i>";
          break;
        case "50d":
          return "<i class='wi wi-day-fog'></i>";
          break;
        case "50n":
          return "<i class='wi wi-night-fog'></i>";
          break;
        default:
          return "<i class='wi wi-day-clear'></i>";
      }
    }
  }
};
</script>
<style >
i.wi {
  font-size: 50px;
}
</style>


