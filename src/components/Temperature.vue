<template>
   <div>
      <p id="temperature">Temperature: <span>{{temperature}} °C</span></p>
      <p id="temperatureMax">Max: <span>{{temperatureMax}} °C</span></p>
      <p id="temperatureMin">Min: <span>{{temperatureMin}} °C</span></p>
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
        this.celsius = !this.celsius;
      } else {
        temperature.textContent = `${this.temperature} °C`;
        max.textContent = `${this.temperatureMax} °C`;
        min.textContent = `${this.temperatureMin} °C`;
        button.textContent = "°F";
      }
    }
  }
};
</script>

<style>

</style>
