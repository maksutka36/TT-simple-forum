import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JokesComponent } from './jokes.component';
import { SharedModule } from '../../shared/shared.module';
import { JokesRoutingModule } from './jokes-routing.module';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    JokesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    JokesRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class JokesModule { }
