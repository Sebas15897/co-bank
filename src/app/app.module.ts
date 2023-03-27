import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthPrivateGuard } from './core/guards/auth-private-guard/auth-private-guard.guard';
import { AuthPublicGuard } from './core/guards/auth-public-guard/auth-public-guard.guard';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [AuthPublicGuard, AuthPrivateGuard],
  bootstrap: [AppComponent],
})

export class AppModule {}
