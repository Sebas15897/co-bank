import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthPrivateGuard } from 'src/app/core/guards/auth-private-guard/auth-private-guard.guard';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'adm-user' },
      {
        path: 'adm-user',
        loadChildren: () =>
          import('./adm-users/adm-user.module').then(
            (m) => m.AdmUsersModule
          ),
      },
    ],
    canActivate: [AuthPrivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivatePageRoutingModule {}
