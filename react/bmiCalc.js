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


