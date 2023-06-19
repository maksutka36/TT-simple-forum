import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MainModule } from './main/main.module';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { JokesDatabaseService } from './databases/jokes-database.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MainModule,
    HttpClientInMemoryWebApiModule.forRoot(JokesDatabaseService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }