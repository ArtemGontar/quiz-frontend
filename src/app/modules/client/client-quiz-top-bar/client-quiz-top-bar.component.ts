import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'client-app-quiz-top-bar',
  templateUrl: './quiz-top-bar.component.html',
  styleUrls: ['./quiz-top-bar.component.scss']
})
export class ClientQuizTopBarComponent implements OnInit, OnDestroy {

  name: string;
  userId: string;
  isAuthenticated: boolean;
  statusSubscription: Subscription;
  nameSubscription: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.statusSubscription = this.authService.authNavStatus$
      .subscribe(status => {
        this.isAuthenticated = status;
        
      });
    this.nameSubscription = this.authService.authNavName$
    .subscribe(name => {
      this.name = name;
    });

    this.nameSubscription = this.authService.authNavId$
    .subscribe(id => {
      this.userId = id;
    });

    this.authService.loadPermissions([this.authService.role]);
  } 

  async login() {
    await this.authService.login();
  }

  register() {
    console.log(this.isAuthenticated);
  }

  async signout() {
    await this.authService.signout();     
  }

  ngOnDestroy() {
    this.nameSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
  }
}
