import React, { useState } from 'react'; 
import './bmistyles.css';

const BMICalculator = () => {
    const [height, setHeight] = useState(''); 
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState(null);
    const [healthStatus, setHealthStatus] = useState('');
    const [healthStatusColor, setHealthStatusColor] = useState('');

    const calculateBMI = () => {
        const heightValue = parseFloat(height); 
        const weightValue = parseFloat(weight); 

        if (isNaN(heightValue) || isNaN(weightValue) || heightValue <=0 > 0 && weightValue <= 0) {
            alert('Please enter positive numbers only');
            return; 
        }
            const calculatedBMI = (weightValue / Math.pow(heightValue / 100, 2)).toFixed(1);
            setBMI(calculatedBMI);

            if(calculatedBMI < 18.5) {
                setHealthStatus("You're underweight");
                setHealthStatusColor('orange');
            } else if (calculatedBMI >= 18.5 && calculatedBMI <= 24.9) {
                setHealthStatus("Congratulations! You're on a regular and healthy weight");
                setHealthStatusColor('green');
            } else if (calculatedBMI >= 25 && calculatedBMI <= 29.9) {
                setHealthStatus("You're overweight");
                setHealthStatusColor('orange');
            } else {
                setHealthStatus("You're in the obesitas range");
                setHealthStatusColor('red')
            }
        } else {
            alert('Please enter positive values, for height and weight');
    }
};

const handleCalculate = () => {
    if (height.trim() !== '' && weight.trim() !== '') {
        calculateBMI();
    } else 
        alert('Please fill in both the height and weight field.');
    }
  };



return (
    <div className="container">
        <h2 className="app-title">BMI Calculator</h2>
        <div className="height box">
            <h4>Height (In centimeters)</h4>
            <input type="number" className="height-input"
                value={height} onChange={(e) => setHeight(e.target.value)}
            />
        </div>
        <div className="weight box">
            <h4>Weight (In kilograms)</h4>
            <input type="number" className="weight-input"
                value={weight} onChange={(e) => setWeight(e.target.value)}
            />
        </div>

        <button className="calculate" onClick={handleCalculate}>
                « Calculate BMI »
        </button>

        {bmi && (
            <div className="result-box">
                <p className="yr-bmi-txt">
                    <b>Your BMI is:</b>
                </p>
            <div className="bmi">
                <h3>{ bmi } </h3>
            </div>
            <p className="result" style={{ color: healthStatusColor }}>
            <span>{healthStatus}</span>
            </p>
        </div>
        )}
     </div>
  );
};


export default BMICalculator;

                









