import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesPageComponent } from './movies-page/movies-page.component';
import { MovieDetailsPageComponent } from './movie-details-page/movie-details-page.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [MoviesPageComponent, MovieDetailsPageComponent],
  imports: [
    CommonModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
