import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngxs/store';
import { NgxSpinnerService } from 'ngx-spinner';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LoadingState } from './core/state/loading/loading.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements OnDestroy {
  private destroy: Subject<boolean> = new Subject<boolean>();
  showLoading$: Observable<boolean> = new Observable();

  constructor(
    private store: Store,
    private ngxSpinnerService: NgxSpinnerService
  ) {
    this.showLoading$ = this.store.select(LoadingState.showLoading);
    this.subscribeState();
  }

  subscribeState() {
    this.showLoading$.pipe(takeUntil(this.destroy)).subscribe((show) => {
      show ? this.ngxSpinnerService.show() : this.ngxSpinnerService.hide();
    });
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
