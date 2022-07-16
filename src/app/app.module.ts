import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomePageComponent } from './home-page/home-page.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { MaterialModuleModule } from './material-module/material-module.module';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModuleModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
