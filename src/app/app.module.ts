import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DataflowParentComponent } from './dataflow-parent/dataflow-parent.component';
import { DataflowChildComponent } from './dataflow-child/dataflow-child.component';
import { FormNormalComponent } from './form-normal/form-normal.component';
import { FormsModule } from '@angular/forms';
import { TempleFormComponent } from './temple-form/temple-form.component';
import { ServiceExampleModule } from './service-example/service-example.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataflowParentComponent,
    DataflowChildComponent,
    FormNormalComponent,
    TempleFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ServiceExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
