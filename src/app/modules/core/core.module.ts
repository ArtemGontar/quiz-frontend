import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    EffectsModule.forFeature([
      //AuthEffects,
    ])
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
