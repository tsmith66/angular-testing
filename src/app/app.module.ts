import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TempConverterService } from 'src/services/temp-converter.services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TempConverterComponent } from './components/temp-converter/temp-converter.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    TempConverterComponent,
    NavComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TempConverterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
