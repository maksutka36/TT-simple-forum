import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyJokesComponent } from './my-jokes.component';
import { SharedModule } from '../../shared/shared.module';
import { MyJokesRoutingModule } from './my-jokes-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    MyJokesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MyJokesRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class MyJokesModule { }
