import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { MoviesPageComponent } from './movies/movies-page/movies-page.component';
import { ActorsPageComponent } from './actors/actors-page/actors-page.component';
import { SelectivePreloadingStrategy } from './core/strategies/selective-preloading.strategy';
import { NetworkBasedPreloadingStrategy } from './core/strategies/network-based-preloading.strategy';
import { OnDemandPreloadingStrategy } from './core/strategies/on-demand-preloading.strategy';

const routes: Routes = [
  {
    path: 'movies',
    // component: MoviesPageComponent,
    loadChildren: () => import('./movies/movies.module').then((m) => m.MoviesModule),
    data: { preload: true }
  },
  {
    path: 'actors',
    // component: ActorsPageComponent,
    loadChildren: () => import('./actors/actors.module').then((m) => m.ActorsModule),
    data: { preload: true }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: OnDemandPreloadingStrategy })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
