<template>
   <div style="position:relative">
      <p id="temperature" class="u-center"> <span>{{temperature.toFixed()}} °C</span></p>
      <div class="temperatures">

      <p id="temperatureMax">Max: <span>{{temperatureMax.toFixed()}} °C</span></p>
      <p id="temperatureMin">Min: <span>{{temperatureMin.toFixed()}} °C</span></p>
      <el-switch  
          v-model="fahrenheit"         
           active-text="°F"
          class="u-center"   
           >
          
      </el-switch>
      </div>
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
      fahrenheit: false
    };
  },
  methods: {
    toFahrenheit(celsiusTemp) {
      return celsiusTemp * 9 / 5 + 32;
    }
  },
  watch: {
    fahrenheit() {
      const temperature = document.querySelector("#temperature span");

      const max = document.querySelector("#temperatureMax span");
      const min = document.querySelector("#temperatureMin span");
      if (this.fahrenheit) {
        const fahrenheit = this.toFahrenheit(this.temperature);
        const fahrenheitMax = this.toFahrenheit(this.temperatureMax);
        const fahrenheitMin = this.toFahrenheit(this.temperatureMin);
        temperature.textContent = `${fahrenheit.toFixed()} °F`;
        max.textContent = `${fahrenheitMax.toFixed()} °F`;
        min.textContent = `${fahrenheitMin.toFixed()} °F`;
      } else {
        temperature.textContent = `${this.temperature.toFixed()} °C`;
        max.textContent = `${this.temperatureMax.toFixed()} °C`;
        min.textContent = `${this.temperatureMin.toFixed()} °C`;
      }
    }
  }
};
</script>

<style >
p#temperature {
  font-size: 38px;
}
p#temperatureMin,
p#temperatureMax {
  font-size: 14px;
}
.temperatures {
  text-align: right;
  text-align: right;
  position: absolute;
  top: -20px;
  right: 5px;
}
</style>
