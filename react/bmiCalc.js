import React, { useState } from 'react'; 
import './bmistyles.css';

const BMICalculator = () => {
    const [height, setHeight] = useState(''); 
    const [weight, setWeight] = useState('');
    const [bmi, setBMI] = useState('');
    const [healthStatus, setHealthStatus] = useState('');
    const [healthStatusColor, setHealthStatusColor] = useState('');

    const calcalateBMI = () => {
        const heightValue = parseFloat(height); 
        const weightValue = parseFloat(weight); 

        if (heightValue > 0 && weightValue > 0 {
            
    }
}





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

                















    </div>
    )
