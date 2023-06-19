import { Component, OnInit } from '@angular/core';
import { JokesStorageService } from '../../services/jokes-storage.service';
import { Joke } from '../../models/jokes.model';
import { MatDialog } from '@angular/material/dialog';
import { Subject, filter, switchMap, takeUntil } from 'rxjs';
import { CreateJokeDialogComponent } from '../../shared/create-joke-dialog/create-joke-dialog.component';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.scss'],
})
export class JokesComponent implements OnInit {
  requestState: 'loading' | 'success' | 'error' | 'none' = 'none';
  jokes: Joke[];
  categories: Category[];
  currentJoke: Joke;
  currentJokeNumber = 0;
  private readonly till$ = new Subject<void>();

  constructor(
    private jokesService: JokesStorageService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.requestState = 'loading';
    this.jokesService
      .getJokesValue()
      .pipe(
        switchMap((jokes) => {
          this.jokes = jokes;
          this.currentJoke = this.jokes[this.currentJokeNumber];
          return this.jokesService
            .getCategoriesValue()
            .pipe(takeUntil(this.till$));
        })
      )
      .subscribe((categories) => {
        this.categories = categories;
        this.requestState = 'success';
      });
  }

  getJokes(): void {
    this.requestState = 'loading';
    this.jokesService
      .getJokesValue()
      .pipe(takeUntil(this.till$))
      .subscribe((jokes) => {
        this.jokes = jokes;
        this.currentJoke = this.jokes[this.currentJokeNumber];
        this.requestState = 'success';
      });
  }

  addJoke(): void {
    this.dialog
      .open(CreateJokeDialogComponent, { panelClass: 'dialog' })
      .afterClosed()
      .pipe(
        takeUntil(this.till$),
        filter((res) => res)
      )
      .subscribe(() => {
        this.getJokes();
        this.currentJokeNumber = this.jokes.length;
        this.currentJoke = this.jokes[this.currentJokeNumber];
      });
  }

  nextJoke(): void {
    this.currentJokeNumber !== this.jokes.length - 1
      ? this.currentJokeNumber++
      : (this.currentJokeNumber = 0);
    this.currentJoke = this.jokes[this.currentJokeNumber];
  }
}
