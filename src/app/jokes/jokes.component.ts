import { Component, OnInit } from '@angular/core';
import { CreateJokeDialogComponent } from '../create-joke-dialog/create-joke-dialog.component';
import { JokesStorageService } from '../jokes-storage.service';
import { Joke } from '../jokes.model';
import {MatDialog} from '@angular/material/dialog';
import { filter } from 'rxjs';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss']
})
export class JokesComponent implements OnInit {

  currentJoke?: Joke;
  currentJokeNumber = 0;
  currentJokeCategory?: string;

  constructor(
    private jokesService: JokesStorageService,
    private dialog: MatDialog
  ){}

  ngOnInit(): void {
    this.currentJoke = this.jokesService.getJokesValue()[this.currentJokeNumber];
    this.currentJokeCategory = this.getCategory(this.currentJoke.category);
  }

  addJoke(): void {
    this.dialog.open(CreateJokeDialogComponent, {panelClass: 'dialog'})
      .afterClosed().pipe(filter(res => res)).subscribe(() => {
        this.currentJokeNumber = this.jokesService.getJokesValue().length - 1;
        this.currentJoke = this.jokesService.getJokesValue()[this.currentJokeNumber];
        this.currentJokeCategory = this.getCategory(this.currentJoke.category);
      });
  }

  nextJoke(): void {
    this.currentJokeNumber !== this.jokesService.getJokesValue().length - 1 ? this.currentJokeNumber++ : this.currentJokeNumber = 0;
    this.currentJoke = this.jokesService.getJokesValue()[this.currentJokeNumber];
    this.currentJokeCategory = this.getCategory(this.currentJoke.category);
  }

  getCategory(id: string): string {
    return this.jokesService.getCategory(id).name;
  }


}
