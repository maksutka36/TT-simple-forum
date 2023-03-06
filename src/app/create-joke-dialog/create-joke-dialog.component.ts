import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Category } from '../category.model';
import { JokesStorageService } from '../jokes-storage.service';


@Component({
  selector: 'app-create-joke-dialog',
  templateUrl: './create-joke-dialog.component.html',
  styleUrls: ['./create-joke-dialog.component.scss']
})
export class CreateJokeDialogComponent implements OnInit {
  categories?: Category[];
  form = new FormGroup({
    category: new FormControl(null, Validators.required),
    content: new FormControl(null, Validators.required)
  });

  constructor(
    private jokesService: JokesStorageService
  ){}

  ngOnInit(): void {
    this.categories = this.jokesService.getCategoriesValue();
  }

  addJoke(): void {
    this.jokesService.addJoke(this.form.get('category')!.value! as string, this.form.get('content')!.value! as string);
  }

}
