// import { getRouteByRole } from './../functions/auth.functions';
// import { filter, map, take } from 'rxjs/internal/operators';
// import { getUserRole } from 'src/app/store/selectors/auth/auth.selector';
// import { Store, select } from '@ngrx/store';
// import { Injectable } from '@angular/core';
// import { CanLoad, Route, UrlSegment } from '@angular/router';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class RoleGuard implements CanLoad {
//   constructor(private store: Store<any>) { }

//   public canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
//     return this.store
//       .pipe(
//         select(getUserRole),
//         filter(Boolean),
//         map((role: string) => getRouteByRole(role) === route.path),
//         take(1)
//       );
//   }
// }
