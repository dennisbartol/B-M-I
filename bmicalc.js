let height = document.querySelector('.container .height input');
let weight = document.querySelector('.container .weight input');
let calculation = document.querySelector('container .calculate-btn');
let bmiText = document.querySelector('.container .result-box .bmi h3');
let result = document.querySelector('.container .result-box');
let health_status = document.querySelector('.container .result-box .result');

// let 

calculation.addEventListener('click', () => {
  if(height.value != '' && weight.value != '') {
    calculateBmi();
   }
  })


let calculateBmi = () => {
  let weightvalue = weight.value; 
  let heightvalue = height.value;

  let bmi = (weightvalue / Math.Pow((heightvalue / 100), 2)).toFixed(1);

  if (bmi < 18.5) {
    health_status.innerHTML = 'Underweight'; 
    health_status.style.color= 'red';
  }

  else if (bmi >= 18.5 && bmi <= 24.9) {
    health_status.innerHTML = 'Normal, regular weight';
    health_status.style.color = 'green';
  }

  else if (bmi >= 25 && bmi <= 29.9)  {
    health_status.innerHTML = 'Obese'
    health_status.style.color = 'hotpink';
  }

  bmiText.innerHTML = bmi; 
  result.style.display = 'block';

}


                             
