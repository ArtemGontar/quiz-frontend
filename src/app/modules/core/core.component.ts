import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, pluck, switchMap } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  role: string[];
  name: string;
  userId: string;
  isAuthenticated: boolean;
  statusSubscription: Subscription;
  nameSubscription: Subscription;
  userIdSubscription: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.role = [this.authService.role];
    this.initListeners();
    this.statusSubscription = this.authService.authNavStatus$
    .subscribe(status => {
      this.isAuthenticated = status;
      
    });
  this.nameSubscription = this.authService.authNavName$
  .subscribe(name => {
    this.name = name;
  });

  this.userIdSubscription = this.authService.authNavId$
    .subscribe(id => {
      this.userId = id;
    });

  this.authService.loadPermissions([this.authService.role]);
  }

  navigateTo(route: string): void {
      console.log(this.activatedRoute)
    this.router.navigate(
      [`${this.role[0].toLowerCase()}/${route}`],
      { relativeTo:  this.activatedRoute }
    );
  }

  async signout() {
    await this.authService.signout();     
  }

  ngOnDestroy() {
    this.nameSubscription.unsubscribe();
    this.statusSubscription.unsubscribe();
    this.userIdSubscription.unsubscribe();
  }

  private initListeners(): void {
    this.activatedRoute.url
      .pipe(
        filter(() => !this.activatedRoute.children.length),
        pluck('0', 'path'),
        filter(path => path === 'dashboard'),
        switchMap(() => this.role),
        filter(Boolean)
      )
      .subscribe((role: string) => {
        this.router.navigate(
          [role.toLowerCase()],
          { relativeTo:  this.activatedRoute }
        );
      });
  }
}
