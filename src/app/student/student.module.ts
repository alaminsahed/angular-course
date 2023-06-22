import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { RouterModule, Routes } from '@angular/router';
import { WarningModule } from '../warning/warning.module';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: StudentListComponent },
];

@NgModule({
  declarations: [StudentListComponent],
  imports: [CommonModule, WarningModule, RouterModule.forChild(routes)],
})
export class StudentModule {}
