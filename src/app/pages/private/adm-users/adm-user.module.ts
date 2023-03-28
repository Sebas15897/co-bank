import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmUsersComponent } from './adm-user.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyCardsRoutingModule } from './adm-user-routing.module';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdmUserGridComponent } from './adm-user-grid/adm-user-grid.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ApplyCardsRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    AgGridModule,
  ],
  declarations: [AdmUsersComponent, AdmUserGridComponent],
})
export class AdmUsersModule {}
