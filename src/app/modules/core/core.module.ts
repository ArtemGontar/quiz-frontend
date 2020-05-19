import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreComponent } from './core.component';
import { CoreRoutingModule } from './core.routing';
import { NgxPermissionsModule } from 'ngx-permissions';

@NgModule({
  declarations: [
    CoreComponent
  ],
  imports: [
    NgxPermissionsModule,
    CommonModule,
    CoreRoutingModule
  ],
  exports: [
    CoreComponent
  ]
})
export class CoreModule { }
