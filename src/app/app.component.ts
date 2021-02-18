import { Component } from '@angular/core';
import { OnDemandPreloadService } from './core/services/on-demand-preload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'klika-webinar-demo';

  constructor(private preloadService: OnDemandPreloadService) {}

  preloadRoute(routePath: string): void {
    this.preloadService.startPreloading(routePath);
  }
}
