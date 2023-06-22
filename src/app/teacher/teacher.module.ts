import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeacherListComponent } from './teacher-list/teacher-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TeacherListComponent },
];

@NgModule({
  declarations: [TeacherListComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TeacherModule {}
