import { NgModule } from '@angular/core'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component'; 
import { BmiCalculatorComponent } from './bmi.component.ts' ; 

@NgModule({
  declarations: [
    AppComponent, 
    BMICalculatorComponent
    ],
imports: [ BrowserModule, FormsModule],
providers: [],
bootstrap: [AppComponent];
})

export class AppModule { }
