import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../auth/auth-routing.module'
import { AuthCallbackComponent } from './auth-callback/auth-callback.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [AuthCallbackComponent, LoginComponent],
  providers: [],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
  ]
})
export class AuthModule { }
