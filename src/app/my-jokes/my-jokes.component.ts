import { Component, OnInit } from '@angular/core';
import { JokesStorageService } from '../jokes-storage.service';
import { Joke } from '../jokes.model';
import {MatDialog} from '@angular/material/dialog';
import { CreateJokeDialogComponent } from '../create-joke-dialog/create-joke-dialog.component';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { filter } from 'rxjs';

@Component({
  selector: 'app-my-jokes',
  templateUrl: './my-jokes.component.html',
  styleUrls: ['./my-jokes.component.scss']
})
export class MyJokesComponent implements OnInit {
  jokes?: Joke[];

  constructor(
    private jokesService: JokesStorageService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.jokes = this.jokesService.getJokesValue();
  }

  addJoke(): void {
    this.dialog.open(CreateJokeDialogComponent, {panelClass: 'dialog'})
      .afterClosed().subscribe(() => this.jokes = this.jokesService.getJokesValue());
  }

  getCategory(id: string): string {
    return this.jokesService.getCategory(id).name;
  }

  deleteJoke(joke: Joke): void {
    this.dialog.open(ConfirmationDialogComponent, {panelClass: 'dialog'})
      .afterClosed().pipe(filter(res => res)).subscribe(() => this.jokesService.deleteJoke(joke));
  }

}
