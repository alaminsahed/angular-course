import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculatorComponent } from './calculator/calculator.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  // { path: '', redirectTo: 'calculation', pathMatch: 'full' },
  { path: '', component: CalculatorComponent },
];

@NgModule({
  declarations: [CalculatorComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class CalculatorModule {}
