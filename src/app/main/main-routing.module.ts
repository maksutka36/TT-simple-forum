import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'jokes',
        pathMatch: 'full',
      },
      {
        path: 'jokes',
        loadChildren: () => import('./features/jokes/jokes.module').then(m => m.JokesModule)
      },
      {
        path: 'my-jokes',
        loadChildren: () => import('./features/my-jokes/my-jokes.module').then(m => m.MyJokesModule)
      },
      {
        path: '**',
        redirectTo: 'jokes',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
