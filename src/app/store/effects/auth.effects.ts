import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect} from '@ngrx/effects';
import {Observable} from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';

@Injectable()
export class CustomizationEffects {

  constructor(
    private actions$: Actions,
    private authService: AuthService,
  ) {

  }

}