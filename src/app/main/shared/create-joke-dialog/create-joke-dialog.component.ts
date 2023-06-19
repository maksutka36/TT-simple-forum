import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../../models/category.model';
import { JokesStorageService } from '../../services/jokes-storage.service';
import { Observable, Subscription } from 'rxjs';
import { NotificationService } from '../../services/notification.service';


@Component({
  selector: 'app-create-joke-dialog',
  templateUrl: './create-joke-dialog.component.html',
  styleUrls: ['./create-joke-dialog.component.scss']
})
export class CreateJokeDialogComponent implements OnInit, OnDestroy {
  categories$: Observable<Category[]>;
  unsubscribe$?: Subscription;
  form = new FormGroup({
    category: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  });

  constructor(
    private jokesService: JokesStorageService,
    private notificationService: NotificationService
  ){}

  ngOnInit(): void {
    this.categories$ = this.jokesService.getCategoriesValue();
  }

  addJoke(): void {
    this.unsubscribe$ = this.jokesService.addJoke(
      this.form.controls.category.value! as string, 
      this.form.controls.content.value! as string
    ).subscribe(() => this.notificationService.sendNotification('Żart został pomyślnie dodany.'));
  }

  ngOnDestroy(): void {
    this.unsubscribe$?.unsubscribe();
  }

}
