import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsPageComponent } from './actors-page/actors-page.component';
import { ActorsRoutingModule } from './actors-routing.module';

@NgModule({
  declarations: [ActorsPageComponent],
  imports: [
    CommonModule,
    ActorsRoutingModule
  ]
})
export class ActorsModule { }
