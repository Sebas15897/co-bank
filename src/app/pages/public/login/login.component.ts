import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subject, takeUntil } from 'rxjs';
import { LoginAction } from 'src/app/core/state/auth/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})

export class LoginComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject<boolean>();
  hide: boolean = true;
  formLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private store: Store,
    private router: Router
  ) {
    this.formLogin = this.createForm();
  }

  ngOnInit() {}

  createForm(): FormGroup {
    return this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
      remindme: [false],
    });
  }

  login() {
    this.store
      .dispatch(new LoginAction())
      .pipe(takeUntil(this.destroy))
      .subscribe(() => {
        this.router.navigateByUrl('/private');
      });
  }

  get invalidForm(): boolean {
    return this.formLogin.invalid;
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
