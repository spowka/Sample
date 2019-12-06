import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';

import { Observable, Subject } from 'rxjs';
import * as fromRoot from 'src/app/@store';
import * as fromUsers from 'src/app/users/@store';
import { UserModel } from '../../models';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {
  public users$: Observable<UserModel[]>;

  public isLoading$: Observable<boolean>;

  public displayedColumns: string[] = ['id', 'name', 'dateOfBirth', 'email', 'status', 'hourlyRate', 'actions'];

  public dataSource: UserModel[] = [];

  private unsubscribe$: Subject<void> = new Subject();

  constructor(private store: Store<fromRoot.State>) {
    this.users$ = this.store.pipe(select(fromUsers.selectUsers));
    this.isLoading$ = this.store.pipe(select(fromUsers.selectLoading));
  }

  ngOnInit() {
    this.users$.pipe(takeUntil(this.unsubscribe$)).subscribe(users => {
      if (!users) {
        return this.store.dispatch(new fromUsers.LoadUsers());
      }

      this.dataSource = users;
    });
  }

  onDelete(id: string): void {
    if (!id) {
      return;
    }

    return this.store.dispatch(new fromUsers.DeleteUser(id));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
