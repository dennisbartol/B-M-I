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

         <button @click="calculateBMI" class="calculate">« Calculate BMI »</button>

       <div class="result-box" v-if="bmi || result">
         <p class="yr-bmi-txt"><b>Your BMI is :</b></p> 
         <div class="bmi">
           <h3>{{ bmi }}</h3>     
         </div>
        <p class="result"> <span>{{ result }}
        </span>
        </p>
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
        result: "",
      };
    },
    methods: {
      calculateBMI() {
        if (this.height > 0 && this.weight > 0) {
        const heightInMeters = this.height / 100; 
        this.bmi = (this.weight / (heightInMeters ** 2)).toFixed(2); 
        this.resultText = this.getBMIresult(this.bmi); 
      } else { 
          this.bmi = null; 
          this.resultText = "For height and weight - Please enter positive values only.";
        }
    },
      getBMIresult(bmi) {
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
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100..900;1,100..900&display=swap');   

body {
  margin: 0; 
  padding: 0; 
  min-height: 100vh; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  font-family: "Noto Sans", sans-serif;
  color: ghostwhite;
  background-image: linear-gradient(to bottom right, #ff6869, #ff69de);
}


.container {
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%,-50%);

  display: flex; 
  flex-direction: column;
  align-items: center; 
      
  background: transparent;
  padding: 20px;
  border-radius: 16px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 474px;  
  /* max-width: 600px; */
  height: 500px;
}


.container .box input { 
  all: unset;
  width: 200px; 
  height: 25px;
  position: absolute; 
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;

  background-color: ghostwhite;
  color: #010101;
  box-shadow: 6px 6px 0 0 #010101;
  border-radius: 6px; 
  border-style: solid; 
  border-color: #010101;
  border-width: 1px; 
  transition: box-shadow 0.4s ease-in-out;
}

.container .calculate:hover {
  box-shadow: 6px 6px 0 0 ghostwhite;
  transition: 0.4s ease-in-out;
}


input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}


.container .calculate {
  all: unset; 
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 45px; 
  width: 54%; 
  color: ghostwhite; 
  background-color: #010101;
  /* background: #93309e; */
  border-radius: 6px;
  margin-top: 40px;
  transition: box-shadow 0.4s ease-in-out;
}

.container .calculate:hover {
  box-shadow: 6px 6px 0 0 ghostwhite;
}


button { 
  margin-top: 4px; 
  padding: 40px;  /* Vert. positioning */
  outline: none; 
  
}


.container .result-box .bmi {
   padding-left: 10px; 
   padding-right: 10px; 
   height: 50px; 
   display: flex; 
   align-items: center;
   justify-content: center;
   margin: auto; 
   width: 100%; /* 120px; */
   margin-top: 5px; 
   
}

.container .result-box .yr-bmi-txt {
  text-align:center;
  margin-top:17px; 
}

@media screen and (max-width: 500px) {
  .container { 
    width: 96%;
  }
}

</style>
