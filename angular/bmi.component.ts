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
      }
  }
}
