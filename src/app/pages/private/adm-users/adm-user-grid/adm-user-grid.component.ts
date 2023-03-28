import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Store } from '@ngxs/store';
import { GridReadyEvent } from 'ag-grid-community';
import { GridOptions } from 'ag-grid-enterprise';
import * as moment from 'moment';
import { Observable, Subject, takeUntil } from 'rxjs';
import { EPages } from 'src/app/core/enums/pages.enum';
import { IUserResult } from 'src/app/core/interfaces/users.interface';
import { GetUsersAction } from 'src/app/core/state/users/users.actions';
import { UsersState } from 'src/app/core/state/users/users.state';

@Component({
  selector: 'app-adm-user-grid',
  templateUrl: './adm-user-grid.component.html',
  styleUrls: ['./adm-user-grid.component.scss'],
})

export class AdmUserGridComponent implements OnInit, OnChanges, OnDestroy {
  private destroy: Subject<boolean> = new Subject();
  listUsers$: Observable<IUserResult[]> = new Observable();
  totalCount$: Observable<number> = new Observable();
  @Input() showGrid: boolean = false;
  currentPage = EPages.fisrtPage;
  totalCount = 0;

  gridApplyCards: GridOptions = {};
  gridData: IUserResult[] = [];

  constructor(private store: Store) {
    this.createGrid();
    this.listUsers$ = this.store.select(UsersState.userList);
    this.totalCount$ = this.store.select(UsersState.TotalCount);
  }

  ngOnChanges() {}

  ngOnInit() {
    this.store.dispatch(new GetUsersAction(this.currentPage));
    this.subscribeState();
  }

  subscribeState() {
    this.listUsers$.pipe(takeUntil(this.destroy)).subscribe((users) => {
      if (users && users.length) {
        this.gridData = users;
      } else {
        this.gridData = [];
      }
    });

    this.totalCount$.pipe(takeUntil(this.destroy)).subscribe((resp) => {
      this.totalCount = resp;
    });
  }

  createGrid() {
    this.gridApplyCards = <GridOptions> {
      sortingOrder: ['desc', 'asc', null],
      columnDefs: [
        {
          headerName: 'Usuario',
          field: 'name',
          filter: true,
          sortable: true,
        },
        {
          headerName: 'Tipo',
          field: 'type',
          filter: true,
          sortable: true,
        },
        {
          headerName: 'Fecha - Hora',
          cellRenderer: () => {
            const now = moment().format('DD/MM/YYYY LT');
            return now;
          },
          filter: true,
          sortable: true,
        },
        {
          headerName: 'Estado',
          field: 'status',
          filter: true,
          sortable: true,
        },
      ],
      onGridReady: (event: GridReadyEvent) => {
        if (event) {
          this.gridApplyCards.api?.sizeColumnsToFit();
        }
      },
    };
  }

  changePage(page: number) {
    this.currentPage = page;
    this.store.dispatch(new GetUsersAction(page));
  }

  next() {
    this.currentPage = this.currentPage + 1;
    this.store.dispatch(new GetUsersAction(this.currentPage));
  }

  previus() {
    this.currentPage = this.currentPage - 1;
    this.store.dispatch(new GetUsersAction(this.currentPage));
  }

  get firstButton(): boolean {
    return this.currentPage === EPages.fisrtPage;
  }

  get secondButton(): boolean {
    return this.currentPage === EPages.secondPage;
  }

  get thirdButton(): boolean {
    return this.currentPage === EPages.thirdPage;
  }

  get fourthButton(): boolean {
    return this.currentPage === EPages.fourthPage;
  }

  get fiveButton(): boolean {
    return this.currentPage === EPages.fivePage;
  }

  get disabledNextBtn(): boolean {
    return this.currentPage === EPages.fivePage;
  }

  get disabledPreviewBtn(): boolean {
    return this.currentPage === EPages.fisrtPage;
  }

  get displayGridCount(): number {
    const count = this.gridApplyCards.api?.getDisplayedRowCount();
    return count ? count : 0;
  }


  ngOnDestroy() {
    this.destroy.next(true);
    this.destroy.unsubscribe();
  }
}
