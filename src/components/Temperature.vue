<template>
   <div>
      <p id="temperature">Temperature: <span>{{temperature.toFixed(1)}} °C</span></p>
      <p id="temperatureMax">Max: <span>{{temperatureMax.toFixed(1)}} °C</span></p>
      <p id="temperatureMin">Min: <span>{{temperatureMin.toFixed(1)}} °C</span></p>
      <button  @click="celsius=!celsius">°F</button>
   </div>
</template>

<script>
export default {
  name: "Temperature",
  props: {
    temperature: Number,
    temperatureMax: Number,
    temperatureMin: Number
  },
  data() {
    return {
      celsius: true
    };
  },
  methods: {
    toFahrenheit(celsiusTemp) {
      return celsiusTemp * 9 / 5 + 32;
    }
  },
  watch: {
    celsius() {
      const temperature = document.querySelector("#temperature span");
      const button = document.querySelector("button");
      const max = document.querySelector("#temperatureMax span");
      const min = document.querySelector("#temperatureMin span");
      if (!this.celsius) {
        const fahrenheit = this.toFahrenheit(this.temperature);
        const fahrenheitMax = this.toFahrenheit(this.temperatureMax);
        const fahrenheitMin = this.toFahrenheit(this.temperatureMin);
        temperature.textContent = `${fahrenheit.toFixed(1)} °F`;
        max.textContent = `${fahrenheitMax.toFixed(1)} °F`;
        min.textContent = `${fahrenheitMin.toFixed(1)} °F`;
        button.textContent = "°C";
      } else {
        temperature.textContent = `${this.temperature.toFixed(1)} °C`;
        max.textContent = `${this.temperatureMax.toFixed(1)} °C`;
        min.textContent = `${this.temperatureMin.toFixed(1)} °C`;
        button.textContent = "°F";
      }
    }
  }
};
</script>

<style>

</style>
