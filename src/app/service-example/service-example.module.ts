import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreServiceExampleComponent } from './core-service-example/core-service-example.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'core-service', pathMatch: 'full' },
  { path: 'core-service', component: CoreServiceExampleComponent },
];

@NgModule({
  declarations: [CoreServiceExampleComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class ServiceExampleModule {}
