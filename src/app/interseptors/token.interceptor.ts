import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(public authService: AuthService) {}
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    request = request.clone({
      setHeaders: {
        Authorization: `${this.authService.authorizationHeaderValue}`
      }
    });
    return next.handle(request);
  }
}