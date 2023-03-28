import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPublicGuard } from 'src/app/core/guards/auth-public-guard/auth-public-guard.guard';

const routes: Routes = [
  {
    path: 'public',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule),
      },
    ],
    canActivate: [AuthPublicGuard],
  },
  {
    path: '',
    redirectTo: 'public/login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PublicRoutingModule {}
