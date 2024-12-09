import { Component } from '@angular-core'; 

@Component ({
  selector: 'app-bmi-calculator',
  templateUrl: 'bmi.component.html', 
  styleUrls: ['bmi.component.css']
})

export class BmiCalculatorComponent {
  height: number | null = null; 
  weight: number | null = null; 
  bmi: number | null = null; 
  result: string = ''; 


  calculateBMI(): void{ 
      if(this.height && this.weight) {
        const heightInMeters = this.height / 100; 
        this.bmi = parseFloat((this.weight / (heightInMeters ** 2)).toFixed(2));
        this.resultText = this.getBMIResultText(this.bmi);
      } else { 
        this.bmi = null; 
        this.resultText = 'Please fill in a valid height and weight';
    }
  }

  getBMIResulstText(bmi: number): string { 
      if (bmi < 18.5) {
        return 'You\'re underweight'; 
      } else if (bmi >= 18.5 && < 24.9) {
        return 'You\'re on a regular and normal weight'; 
      } else if (bmi >= 25 && bmi < 29.9) {
        return 'You\'re overweight'; 
      } else {
        return 'Obesity range';
      }
    }
  }
