import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentAlertComponent } from './student-alert/student-alert.component';

@NgModule({
  declarations: [StudentAlertComponent],
  imports: [CommonModule],
  exports: [StudentAlertComponent],
})
export class WarningModule {}
