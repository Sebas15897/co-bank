import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subject, takeUntil } from 'rxjs';
import { LayoutState } from 'src/app/core/state/layout/layout.state';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  showMenu$: Observable<boolean> = new Observable();
  isOpenMenu: boolean = false;

  constructor(private store: Store) {
    this.showMenu$ = this.store.select(LayoutState.showMenu);
  }

  ngOnInit() {
    this.subscribeState();
  }

  subscribeState() {
    this.showMenu$.pipe(takeUntil(this.destroy)).subscribe((show) => {
      this.isOpenMenu = show;
    });
  }

  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
