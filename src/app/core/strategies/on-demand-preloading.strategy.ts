import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { OnDemandPreloadService } from '../services/on-demand-preload.service';

@Injectable({
  providedIn: 'root',
  deps: [OnDemandPreloadService]
})
class OnDemandPreloadingStrategy implements PreloadingStrategy {
  constructor(private onDemandPreloadService: OnDemandPreloadService) {}

  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return this.onDemandPreloadService.state.pipe(mergeMap((pathToPreload: string) => {
      return this.shouldPreload(route, pathToPreload) ? load() : of(null);
    }))
  }

  private shouldPreload(route: Route, pathToPreload: string): boolean {
    return route.data &&
      route.data.preload &&
      route.path.includes(pathToPreload)
  }
}

export { OnDemandPreloadingStrategy };
