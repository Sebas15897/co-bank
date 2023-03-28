import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { HideLoadingAction, ShowLoadingAction } from './loading.actions';

export interface LoadingStateModel {
  show: boolean;
}

@State<LoadingStateModel>({
  name: 'loading',
  defaults: {
    show: false,
  },
})
@Injectable()
export class LoadingState {
  @Selector() static showLoading(state: LoadingStateModel): boolean {
    return state?.show ? true : false;
  }

  constructor() {}

  @Action(ShowLoadingAction)
  ShowLoadingAction(ctx: StateContext<LoadingStateModel>) {
    ctx.patchState({
      show: true,
    });
  }

  @Action(HideLoadingAction)
  HideLoadingAction(ctx: StateContext<LoadingStateModel>) {
    ctx.patchState({
      show: false,
    });
  }
}
