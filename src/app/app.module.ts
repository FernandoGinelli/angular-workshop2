import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { StepsComponent } from './components/steps/steps.component';
import { TrackingComponent } from './components/tracking/tracking.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    StepsComponent,
    TrackingComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
