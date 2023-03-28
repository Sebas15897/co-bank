import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdmUsersComponent } from './adm-user.component';

const routes: Routes = [
  {
    path: '',
    component: AdmUsersComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class ApplyCardsRoutingModule {}
