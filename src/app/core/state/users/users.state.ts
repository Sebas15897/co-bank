import { Injectable } from '@angular/core';
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { catchError, tap } from 'rxjs';
import { SweetAlertHelper } from '../../helpers/sweet-alert.helper';
import { IUserResult } from '../../interfaces/users.interface';
import { UsersService } from '../../services/users.service';
import {
  HideLoadingAction,
  ShowLoadingAction,
} from '../loading/loading.actions';
import { GetUsersAction, GetUsersByFilterAction } from './users.actions';

export interface UsersStateModel {
  users: IUserResult[];
  totalCount: number;
}

@State<UsersStateModel>({
  name: 'users',
  defaults: {
    users: [],
    totalCount: 0,
  },
})
@Injectable()
export class UsersState {
  @Selector() static userList(state: UsersStateModel): IUserResult[] {
    return state?.users;
  }

  @Selector() static TotalCount(state: UsersStateModel): number {
    return state?.totalCount;
  }

  constructor(
    private usersService: UsersService,
    private sweetAlertHelper: SweetAlertHelper
  ) {}

  @Action(GetUsersAction)
  GetUsersAction(
    ctx: StateContext<UsersStateModel>,
    { payload }: GetUsersAction
  ) {
    return payload
      ? this.usersService.getUsers(payload).pipe(
          tap(
            (resp) => {
              ctx.dispatch(new ShowLoadingAction());
              ctx.patchState({
                users: resp.results,
                totalCount: resp.info.count,
              });
              setTimeout(() => {
                ctx.dispatch(new HideLoadingAction());
              }, 2000);
            },
            (error) => {
              this.sweetAlertHelper.createCustomAlert({
                title: 'Error',
                text: error.error.error,
                icon: error,
              });
              ctx.dispatch(new HideLoadingAction());
            }
          )
        )
      : ctx.patchState({
          users: [],
          totalCount: 0,
        });
  }

  @Action(GetUsersByFilterAction)
  GetUsersByFilterAction(
    ctx: StateContext<UsersStateModel>,
    { payload }: GetUsersByFilterAction
  ) {
    ctx.dispatch(new ShowLoadingAction());
    return this.usersService.getUserByFilter(payload).pipe(
      tap(
        (resp) => {
          ctx.patchState({
            users: resp.results,
            totalCount: resp.info.count,
          });
          setTimeout(() => {
            ctx.dispatch(new HideLoadingAction());
          }, 1000);
        },
        (error) => {
          this.sweetAlertHelper.createCustomAlert({
            title: 'Error',
            text: error.error.error,
            icon: error,
          });
          ctx.dispatch(new HideLoadingAction());
        }
      ),
    );
  }
}
