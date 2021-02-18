import { Injectable } from '@angular/core';
import { PreloadingStrategy, Route } from '@angular/router';
import { Observable, of } from 'rxjs';

export declare var navigator;

@Injectable({
  providedIn: 'root',
})
class NetworkBasedPreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
    return this.userHasGoodConnection() ? load() : of(null);
  }

  private userHasGoodConnection(): boolean {
    const connection = navigator.connection;

    if (connection) {
      if (connection.saveData) return false;

      const connectionsToAvoid = ['slow-2g', '2g'];
      const effectiveType = connection.effectiveType || '';

      if (connectionsToAvoid.includes(effectiveType)) return false;
    }

    return true;
  }
}

export { NetworkBasedPreloadingStrategy };
