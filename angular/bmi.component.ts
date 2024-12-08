import { Component } from '@angular-core'; 

@Component ({
  selector: 'app-bmi-calculator',
  templateUrl: 'bmi.component.html', 
  styleUrls: [bmi.component.css]
})

export class BmiCalculatorComponent {
  height: number | null = null; 
  weight: number
  bmi: number
  result: string = ''; 


  calculateBMI(): void{ 
    

  }
}
