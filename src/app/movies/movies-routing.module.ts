import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoviesPageComponent } from './movies-page/movies-page.component';

const routes = [
  {
    path: '',
    component: MoviesPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MoviesRoutingModule {}
