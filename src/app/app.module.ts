import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterBarComponent } from './footer-bar.componen';
import { NavBarComponent } from './about-company/nav-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterBarComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
