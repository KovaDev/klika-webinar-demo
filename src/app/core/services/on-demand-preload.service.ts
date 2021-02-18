import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

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
