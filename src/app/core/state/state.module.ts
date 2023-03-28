import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';
import { HttpClientModule } from '@angular/common/http';
import { AuthState } from './auth/auth.state';
import { environment } from 'src/environments/environment.prod';
import { LoadingState } from './loading/loading.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { LayoutState } from './layout/layout.state';
import { UsersState } from './users/users.state';

@NgModule({
  imports: [
    HttpClientModule,
    NgxsModule.forRoot([AuthState, LoadingState, LayoutState, UsersState], {
      developmentMode: !environment.production,
    }),
    NgxsStoragePluginModule.forRoot({
      key: [AuthState],
    }),
    NgxsReduxDevtoolsPluginModule.forRoot({ disabled: environment.production }),
  ],
})
export class StateModule {}
