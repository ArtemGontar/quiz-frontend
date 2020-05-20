import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserManager, UserManagerSettings, User } from 'oidc-client';
import { BehaviorSubject } from 'rxjs'; 
import { environment } from '../models/environment'
import { NgxPermissionsService } from 'ngx-permissions';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _authNavStatusSource = new BehaviorSubject<boolean>(false);
  private _authNavNameSource = new BehaviorSubject<string>("");
  private _authNavIdSource = new BehaviorSubject<string>("");

  authNavStatus$ = this._authNavStatusSource.asObservable();
  authNavName$ = this._authNavNameSource.asObservable();
  authNavId$ = this._authNavIdSource.asObservable();
  private manager = new UserManager(getClientSettings());
  private user: User | null;

  constructor(private http: HttpClient, private permissionsService: NgxPermissionsService) { 
    //super();     
    
    this.initUser();
  }

  initUser(){
    this.manager.getUser().then(user => {
      this.user = user;
      this._authNavStatusSource.next(this.isAuthenticated());
      this._authNavNameSource.next(this.user.profile.name);
      this._authNavIdSource.next(this.user.profile.sub);
    });
  }
  async login() { 
    return await this.manager.signinRedirect();
  }

  async completeAuthentication() {
      this.user = await this.manager.signinRedirectCallback();
      this._authNavStatusSource.next(this.isAuthenticated());      
  }

  register(userRegistration: any) {    
    return this.http.post(environment.IdentityUrl + '/account', userRegistration);
  }

  loadPermissions(permissions: any) {    
    this.permissionsService.loadPermissions(permissions);
  }

  isAuthenticated(): boolean {
    return this.user != null && !this.user.expired;
  }

  get authorizationHeaderValue(): string {
    return `${this.user.token_type} ${this.user.access_token}`;
  }

  get id(): string {
    return this.user != null ? this.user.profile.userId : '';
  }

  get name(): string {
    return this.user != null ? this.user.profile.name : '';
  }

  get role():string {
    return this.user != null ? this.user.profile.role : '';
  }

  async signout() {
    await this.manager.signoutRedirect();
  }
}

export function getClientSettings(): UserManagerSettings {
  return {
      authority: 'http://localhost:6001',
      client_id: 'angular_spa',
      redirect_uri: 'http://localhost:4200/auth-callback',
      post_logout_redirect_uri: 'http://localhost:4200',
      response_type:"id_token token",
      scope:"openid profile role userId QuizApi UserApi StatisticApi",
      filterProtocolClaims: true,
      loadUserInfo: true,
      automaticSilentRenew: true,
      silent_redirect_uri: 'http://localhost:4200/silent-refresh.html'
  };
}