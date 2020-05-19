import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CoreComponent } from './modules/core/core.component';
import { AuthGuard } from './utils/guards/auth.guard';
import { AuthCallbackComponent } from './auth/auth-callback/auth-callback.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {
    path: 'dashboard',
    component: CoreComponent,
    children: [
      {
        path: 'client',
        loadChildren: () => import('./modules/client/client.module')
          .then(m => m.ClientModule),
        //canLoad: [RoleGuard]
      },
      {
        path: 'manager',
        loadChildren: () => import('./modules/manager/manager.module')
          .then(m => m.ManagerModule),
        //canLoad: [RoleGuard]
      },
      {
        path: 'admin',
        loadChildren: () => import('./modules/admin/admin.module')
          .then(m => m.AdminModule),
        //canLoad: [RoleGuard]
      },
      {
        path: 'moderator',
        loadChildren: () => import('./modules/moderator/moderator.module')
          .then(m => m.ModeratorModule),
        //canLoad: [RoleGuard]
      },
      { path: '**', redirectTo: 'dashboard' },
      { path: 'auth-callback', component: AuthCallbackComponent },
    ], 
    //canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
