import { ActionType, getActionTypeFromInstance, NgxsNextPluginFn } from '@ngxs/store';
import { LogoutAction } from '../auth/auth.actions'

export function logoutPlugin(
  state: any,
  action: ActionType,
  next: NgxsNextPluginFn
) {
  // Use the get action type helper to determine the type
  if (getActionTypeFromInstance(action) === LogoutAction.type) {
    // if we are a logout type, lets erase all the state
    state = {};
  }

  // return the next function with the empty state
  return next(state, action);
}
