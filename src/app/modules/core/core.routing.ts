import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './core.component';

const routes: Routes = [
   {
    path: '', component: CoreComponent,
    children: [
      { path: 'client', loadChildren: '../client/client.module#ClientModule' },
      { path: 'admin',  loadChildren: '../admin/admin.module#AdminModule' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule {
}
