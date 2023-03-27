import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthPrivateGuard } from './core/guards/auth-private-guard/auth-private-guard.guard';
import { AuthPublicGuard } from './core/guards/auth-public-guard/auth-public-guard.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app.routing.module';
import { StateModule } from './core/state/state.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    StateModule,
  ],
  providers: [AuthPublicGuard, AuthPrivateGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
