import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { SweetAlertHelper } from '../../helpers/sweet-alert.helper';
import { AuthService } from '../../services/auth.service';
import { ShowSideBarAction } from '../layout/layout.actions';
import {
  HideLoadingAction,
  ShowLoadingAction,
} from '../loading/loading.actions';
import { LoginAction, LogoutAction } from './auth.actions';

export interface AuthStateModel {
  token: string | null;
  user: any;
}

@State<AuthStateModel>({
  name: 'auth',
  defaults: {
    token: null,
    user: {} as any,
  },
})

@Injectable()
export class AuthState {
  @Selector() static isAuthenticated(state: AuthStateModel): boolean {
    return state?.token ? false : true;
  }

  constructor(
    private authService: AuthService,
    private sweetAlertHelper: SweetAlertHelper,
    private router: Router,
  ) {}

  @Action(LoginAction)
  LoginAction(ctx: StateContext<AuthStateModel>, { payload }: LoginAction) {
    ctx.dispatch(new ShowLoadingAction());
    this.authService.login(payload).then((authData) => {
      authData.user.getIdToken().then((token) => {
        ctx.patchState({
          token: token,
          user: authData.user.email,
        });
        ctx.dispatch(new ShowSideBarAction(true));
        setTimeout(() => {
          ctx.dispatch(new HideLoadingAction()).subscribe(() => {
            this.router.navigateByUrl('/private');
            this.sweetAlertHelper.createCustomAlert({
              title: 'Bienvenido',
              text: 'Ha iniciado sesión con exito.',
              icon: 'success',
            });
          });
        }, 2000);
      });
    }).catch((error) => {
      ctx.dispatch(new HideLoadingAction());
      this.sweetAlertHelper.createCustomAlert({
        title: 'Error',
        text: error.message,
        icon: 'error',
      });
    });
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
