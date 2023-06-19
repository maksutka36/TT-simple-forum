import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './components/notification/notification.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { MainRoutingModule } from './main-routing.module';
import { GlobalErrorComponent } from './components/global-error/global-error.component';



@NgModule({
  declarations: [
    MainComponent,
    NotificationComponent,
    NavbarComponent,
    GlobalErrorComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class MainModule { }
