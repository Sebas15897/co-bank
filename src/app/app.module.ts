import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { AuthPrivateGuard } from './core/guards/auth-private-guard/auth-private-guard.guard';
import { AuthPublicGuard } from './core/guards/auth-public-guard/auth-public-guard.guard';
import { StateModule } from './core/state/state.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NGXS_PLUGINS } from '@ngxs/store';
import { logoutPlugin } from './core/state/store-logout-plugin/store-logout-plugin';
import { AgGridModule } from 'ag-grid-angular';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StateModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
    AgGridModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    AuthPublicGuard,
    AuthPrivateGuard,
    {
      provide: NGXS_PLUGINS,
      useValue: logoutPlugin,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
