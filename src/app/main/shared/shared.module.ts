import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { CreateJokeDialogComponent } from './create-joke-dialog/create-joke-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { GetCategoryPipe } from './pipes/get-category/get-category.pipe';



@NgModule({
  declarations: [
    ConfirmationDialogComponent,
    CreateJokeDialogComponent,
    GetCategoryPipe
  ],
  exports: [
    ConfirmationDialogComponent,
    CreateJokeDialogComponent,
    GetCategoryPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
  ]
})
export class SharedModule { }
