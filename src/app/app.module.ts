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
import { ServiceExampleModule } from './service-example/service-example.module';
import { FormExampleModule } from './form-example/form-example.module';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    DataflowParentComponent,
    DataflowChildComponent,
    FormNormalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HttpClientModule,
    FormsModule,
    ServiceExampleModule,
    FormExampleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
