import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NewComponent } from './new/new.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { AllComponent } from './all/all.component';

@NgModule({
  declarations: [
    AppComponent,
    NewComponent,
    WelcomeComponent,
    AboutComponent,
    AllComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
