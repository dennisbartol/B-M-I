let height = document.querySelector('.container .height-input');
let weight = document.querySelector('.container .weight-input');
let calculate = document.querySelector('.container .calculate');
let bmiText = document.querySelector('.container .result-box .bmi h3');
let result = document.querySelector('.container .result-box');
let healthStatus = document.querySelector('.container .result-box .result');

calculate.addEventListener('click', () => {
  if (height.value != '' && weight.value != '') {
      calculateBmi(); 
     }
  });

  let calculateBmi = () => {
    let weightValue = weight.value; 
    let heightValue = height.value; 

    let bmi = (weightValue / Math.pow((heightValue / 100), 2)).toFixed(1);

    if (bmi < 18.5) {
      healthStatus.innerHTML = 'Underweight';
      healthStatus.style.color = 'orange';
    }

    else if(bmi >= 18.5 && bmi <= 24.9) {
      healthStatus.innerHTML = '✔️ Congratulations ! You're on a regular and healthy weight'; 
      healthStatus.style.color = "Green";
    }

    else if (bmi >= 25 && bmi <= 29.9) {
      healthStatus.innerHTML = "You\'re overweight";
      healthStatus.style.color = 'green';
    }

    else {
      healthStatus.innerHTML = "You're in the obese range";
      healthStatus.style.color = 'red';
    }

    bmiText.innerHTML = bmi; 
    result.style.display = 'block';

  }
