<template>
  <div class="container">

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
