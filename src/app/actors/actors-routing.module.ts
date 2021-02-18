import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActorsPageComponent } from './actors-page/actors-page.component';

const routes = [
  {
    path: '',
    component: ActorsPageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActorsRoutingModule {}
