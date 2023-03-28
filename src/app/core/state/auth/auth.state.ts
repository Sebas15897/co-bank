import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext, Store } from '@ngxs/store';
import { tap } from 'rxjs';
import { SweetAlertHelper } from '../../helpers/sweet-alert.helper';
import { IUser } from '../../interfaces/user.interface';
import { AuthService } from '../../services/auth.service';
import { ShowSideBarAction } from '../layout/layout.actions';
import {
  HideLoadingAction,
  ShowLoadingAction,
} from '../loading/loading.actions';
import { LoginAction, LogoutAction } from './auth.actions';

export interface AuthStateModel {
  token: string | null;
  user: IUser;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    user: {} as IUser,
  },
})

@Injectable()
export class AuthState {
  @Selector() static isAuthenticated(state: AuthStateModel): boolean {
    return state?.token ? false : true;
  }

  constructor(
    private authService: AuthService,
    private sweetAlertHelper: SweetAlertHelper
  ) {}

  @Action(LoginAction)
  LoginAction(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new ShowLoadingAction());
    return this.authService.login().pipe(
      tap(
        (result) => {
          ctx.patchState({
            token: result.name,
            user: result,
          });
          ctx.dispatch(new ShowSideBarAction(true));
          setTimeout(() => {
            ctx.dispatch(new HideLoadingAction()).subscribe(() => {
              this.sweetAlertHelper.createCustomAlert({
                title: 'Bienvenido',
                text: 'Ha iniciado sesión con exito.',
                icon: 'success',
              });
            });
          }, 2000);
        },
        (error) => {
          ctx.dispatch(new HideLoadingAction());
        }
      )
    );
  }

  @Action(LogoutAction)
  LogoutAction(ctx: StateContext<AuthStateModel>) {
    ctx.dispatch(new ShowLoadingAction());
    setTimeout(() => {
      ctx.dispatch(new HideLoadingAction()).subscribe(() => {
        this.sweetAlertHelper.createCustomAlert({
          title: 'Sesión finalizada con éxito',
          text: 'Esperamos que vuelva pronto',
          icon: 'success',
        });
      });
    }, 2000);
  }
}
