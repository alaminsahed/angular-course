import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss'],
})
export class CalculatorComponent {
  firstNumber: string = '';
  secondNumber: string = '';
  result: number = 0;
  warning: string = '';

  add = () => {
    this.warning = '';
    if (this.firstNumber === '' || this.secondNumber === '') {
      this.warning = 'Both fields are required to perform addition.';
      this.result = 0;
      return;
    }
    this.result = Number(this.firstNumber) + Number(this.secondNumber);
  };

  subtract = () => {
    if (Number(this.firstNumber) < Number(this.secondNumber)) {
      this.warning = 'First number cannot be less than second number.';
      this.result = 0;
      return;
    }
    this.result = Number(this.firstNumber) - Number(this.secondNumber);
  };

  multiply = () => {
    if (this.firstNumber === '' || this.secondNumber === '') {
      this.warning = 'Both fields are required to perform multiplication.';
      this.result = 0;
      return;
    }
    this.result = Number(this.firstNumber) * Number(this.secondNumber);
  };

  divide = () => {
    if (Number(this.firstNumber) < Number(this.secondNumber)) {
      this.warning = 'Dividend cannot be less than divisor.';
      this.result = 0;
      return;
    }
    this.result = Number(this.firstNumber) / Number(this.secondNumber);
  };

  clear = () => {
    this.firstNumber = '';
    this.secondNumber = '';
    this.result = 0;
    this.warning = '';
  };

  inputStyle = () => {
    return {
      margin: '10px',
    };
  };
}
