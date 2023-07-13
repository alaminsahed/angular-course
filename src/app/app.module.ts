import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { DataflowParentComponent } from './dataflow-parent/dataflow-parent.component';
import { DataflowChildComponent } from './dataflow-child/dataflow-child.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, DataflowParentComponent, DataflowChildComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
