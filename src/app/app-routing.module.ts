import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { TeacherListComponent } from './teacher/teacher-list/teacher-list.component';
import { DataflowParentComponent } from './dataflow-parent/dataflow-parent.component';
import { FormNormalComponent } from './form-normal/form-normal.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'parent', component: DataflowParentComponent },
  {
    path: 'students',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
  },
  {
    path: 'teachers',
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
  },
  {
    path: 'calculator',
    loadChildren: () =>
      import('./calculator/calculator.module').then((m) => m.CalculatorModule),
  },
  {
    path: 'review',
    loadChildren: () =>
      import('./review/review.module').then((m) => m.ReviewModule),
  },
  {
    path: 'loginForm',
    loadChildren: () =>
      import('./login-form/login-form.module').then((m) => m.LoginFormModule),
  },
  {
    path: 'normalForm',
    component: FormNormalComponent,
  },
  {
    path: 'service-example',
    loadChildren: () =>
      import('./service-example/service-example.module').then(
        (m) => m.ServiceExampleModule
      ),
  },
  {
    path: 'form-example',
    loadChildren: () =>
      import('./form-example/form-example.module').then(
        (m) => m.FormExampleModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
