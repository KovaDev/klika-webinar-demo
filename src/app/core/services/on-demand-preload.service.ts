import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export class OnDemandPreloadingOptions {
  constructor(routePath: string, preload: true) {};
}

@Injectable({
  providedIn: 'root',
})
class OnDemandPreloadService {
  private subject = new Subject<string>();
  state = this.subject.asObservable();

  startPreloading(routePath: string): void {
    this.subject.next(routePath);
  }
}

export { OnDemandPreloadService };
