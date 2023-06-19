import { Component, OnInit, OnDestroy } from '@angular/core';
import { JokesStorageService } from '../../services/jokes-storage.service';
import { Joke } from '../../models/jokes.model';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../../shared/confirmation-dialog/confirmation-dialog.component';
import { filter, switchMap, Subject, takeUntil } from 'rxjs';
import { CreateJokeDialogComponent } from '../../shared/create-joke-dialog/create-joke-dialog.component';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-my-jokes',
  templateUrl: './my-jokes.component.html',
  styleUrls: ['./my-jokes.component.scss'],
})
export class MyJokesComponent implements OnInit, OnDestroy {
  requestState: 'loading' | 'success' | 'error' | 'none' = 'none';
  jokes: Joke[];
  categories: Category[];
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
        this.requestState = 'success';
      });
  }

  addJoke(): void {
    this.dialog
      .open(CreateJokeDialogComponent, { panelClass: 'dialog' })
      .afterClosed()
      .pipe(takeUntil(this.till$))
      .subscribe(() => this.getJokes());
  }

  getCategory(categoryId: string): string {
    let filteredCategory: Category;
    this.categories.forEach((category) => {
      if (category.id === categoryId) filteredCategory = category;
    });
    return filteredCategory!.name;
  }

  deleteJoke(joke: Joke): void {
    this.dialog
      .open(ConfirmationDialogComponent, { panelClass: 'dialog' })
      .afterClosed()
      .pipe(
        filter((res) => res),
        switchMap(() => this.jokesService.deleteJoke(joke)),
        takeUntil(this.till$)
      )
      .subscribe(() => this.getJokes());
  }

  ngOnDestroy(): void {
    this.till$.next();
    this.till$.complete();
  }
}
