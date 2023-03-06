import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JokesComponent } from './jokes/jokes.component';
import { MyJokesComponent } from './my-jokes/my-jokes.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'my-jokes',
        pathMatch: 'full',
    },
    {
        path: 'my-jokes',
        component: MyJokesComponent
    },
    {
        path: 'jokes',
        component: JokesComponent
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
