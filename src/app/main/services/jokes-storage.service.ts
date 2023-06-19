import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Category } from '../models/category.model';
import { Joke } from '../models/jokes.model';
import { Observable, catchError, throwError } from 'rxjs';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root',
})
export class JokesStorageService {
  constructor(private http: HttpClient, private errorService: ErrorService) {}

  getJokesValue(): Observable<Joke[]> {
    return this.http
      .get<Joke[]>('api/jokes')
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  getCategoriesValue(): Observable<Category[]> {
    return this.http
      .get<Category[]>('api/categories')
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  addJoke(categoryId: string, content: string): Observable<void> {
    return this.http
      .post<void>('api/jokes', {
        id: this.generateId(),
        category: categoryId,
        content: content,
      })
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  deleteJoke(joke: Joke): Observable<void> {
    return this.http
      .delete<void>(`api/jokes/${joke.id}`)
      .pipe(catchError(this.errorHandler.bind(this)));
  }

  private generateId(): string {
    const stringArr = [];
    for (let i = 0; i < 2; i++) {
      const S4 = (((1 + Math.random()) * 0x10000) | 0)
        .toString(16)
        .substring(1);
      stringArr.push(S4);
    }
    return stringArr.join('-');
  }

  private errorHandler(error: HttpErrorResponse): Observable<never> {
    this.errorService.handle(error.statusText);
    return throwError(() => error.statusText);
  }
}
