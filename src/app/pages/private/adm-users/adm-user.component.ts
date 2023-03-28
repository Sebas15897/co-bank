import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Subject } from 'rxjs';
import {
  GetUsersAction,
  GetUsersByFilterAction,
} from 'src/app/core/state/users/users.actions';

@Component({
  selector: 'app-adm-user',
  templateUrl: './adm-user.component.html',
  styleUrls: ['./adm-user.component.scss'],
})

export class AdmUsersComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  searchForm: FormGroup;

  constructor(private fb: FormBuilder, private store: Store) {
    this.searchForm = this.createForm();
  }

  ngOnInit() {}

  searchByFilter() {
    const formData = Object.assign({}, this.searchForm.getRawValue());
    this.store.dispatch(new GetUsersByFilterAction(formData));
  }

  clearFilter() {}

  createForm(): FormGroup {
    return this.fb.group({
      name: [''],
      type: [''],
    });
  }

  reset() {
    this.searchForm.patchValue({
      name: '',
      type: '',
    });
    this.store.dispatch(new GetUsersAction(null));
  }

  resetName() {
    this.searchForm.get('name')?.setValue('');
  }

  resetType() {
    this.searchForm.get('type')?.setValue('');
  }

  get search(): string {
    return this.searchForm.get('name')?.value;
  }

  get typesearch(): string {
    return this.searchForm.get('type')?.value;
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
