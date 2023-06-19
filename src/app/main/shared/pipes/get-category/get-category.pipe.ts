import { Pipe, PipeTransform } from '@angular/core';
import { Category } from 'src/app/main/models/category.model';

@Pipe({
  name: 'getCategory'
})
export class GetCategoryPipe implements PipeTransform {

  transform(categoryId: string, categories: Category[]): string {
    let filteredCategory: Category;
    categories.forEach((category) => {
      if (category.id === categoryId) filteredCategory = category;
    });
    return filteredCategory!.name;
  }

}
