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
        
      };
    },
    methods: {
      if (this.height && this.weight) {
        const heightInMeters = this.height / 100; 
        this.bmi = (this.weight / (heightInMeters ** 2)).toFixed(2); 
        this.resultText = this.getBMIResultTest(this.bmi); 
      } else { 
          this.bmi = null; 
          this.resultText = "For height and weight - Please enter positive values only."
        }
    },



    }
  }
</script>

<style>

</style>
