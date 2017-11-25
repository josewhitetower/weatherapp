<template>
   <div>
      <p id="temperature">Temperature: <span>{{temperature}} °C</span></p>
      <p id="temperature-max">Max: <span>{{temperature-max}} °C</span></p>
      <p id="temperature-min">Min: <span>{{temperature-min}} °C</span></p>
      <button @click="celsius=!celsius">°F</button>
     

     </div>

</template>

<script>
export default {
  name: "Temperature",
  props: ["temperature", "temperature-max", "temperature-min"],
  data() {
    celsius: true;
  },
  methods: {
    toFahrenheit(celsiusTemp) {
      return celsiusTemp * 9 / 5 + 32;
    }
  },
  watch: {
    celsius() {
      if (!this.celsius) {
        console.log("Fahrenheit:", this.toFahrenheit(this.temperature));
      }
    }
  }
};
</script>

<style>

</style>
