import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateExampleComponent } from './template-example/template-example.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  { path: '', redirectTo: 'template-form', pathMatch: 'full' },
  { path: 'template-form', component: TemplateExampleComponent },
];

@NgModule({
  declarations: [TemplateExampleComponent],
  imports: [CommonModule, RouterModule.forChild(routes), FormsModule],
})
export class FormExampleModule {}
