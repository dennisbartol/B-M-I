<template>
  <div class="container">
    <h2 class="app-title">BMI Calculator</h2>  
       <div class="height box">
          <h4>Height (In centimeters)</h4>
          <input type="number" v-model.number="height" class="height-input" />
        </div>
         
        <div class="weight box">
          <h4>Weight (In kilograms)</h4>  
          <input type="number" v-model.number = "weight" class="weight-input" />
        </div>

         <button @click="calculateBMI">« Calculate BMI »</button>

       <div class="result-box">
         <p class="yr-bmi-txt"><b>Your BMI is :</b></p> 
         <div class="bmi">
           <h3></h3>     
         </div>
        <p class="result"> <span></span></p>
    </div>
  </div>
</template>



<script>
  export default { 
    data() { 
      return {
        height: null,
        weight: null,
        bmi: null, 
        result: "";
      };
    },
    methods: {
      calculcateBMI() {
      if (this.height && this.weight) {
        const heightInMeters = this.height / 100; 
        this.bmi = (this.weight / (heightInMeters ** 2)).toFixed(2); 
        this.resultText = this.getBMIResultTest(this.bmi); 
      } else { 
          this.bmi = null; 
          this.resultText = "For height and weight - Please enter positive values only.";
        }
    },
      gemBMIresult(bmi) {
        if (bmi < 18.5) {
          return "You\'re underweight"; 
        } else if (bmi >= 18.5 && bmi < 24.9) {
          return "You have a regular and healthy weight"; 
        } else if (bmi >= 25 && bmi < 29.9) {
          return "You\'re overweight"; 
        } else { 
          return "You\'re in the obesitas range";
        }
      },
    },
  };
</script>

<style>

</style>
