import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, pluck, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-core',
  templateUrl: './core.component.html',
  styleUrls: ['./core.component.scss']
})
export class CoreComponent implements OnInit {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.initListeners();
  }


  private initListeners(): void {

    this.activatedRoute.url
      .pipe(
        filter(() => !this.activatedRoute.children.length),
        pluck('0', 'path'),
        filter(path => path === 'dashboard'),
        switchMap(() => 'Admin'),
        filter(Boolean)
      )
      .subscribe((role: string) => {
        this.router.navigate(
          ['admin'],
          { relativeTo:  this.activatedRoute }
        );
      });
  }
}
