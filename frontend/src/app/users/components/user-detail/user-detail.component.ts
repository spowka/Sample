import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import * as fromRoot from 'src/app/@store';
import * as fromUsers from 'src/app/users/@store';

import { UserModel } from '../../models';
import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit, OnDestroy {
  public isLoading$: Observable<boolean>;

  public user: UserModel;

  public id: number;

  private _selectedUser$: Observable<UserModel>;

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store<fromRoot.State>,
    private route: ActivatedRoute,
  ) {
    this.isLoading$ = this.store.pipe(select(fromUsers.selectLoading));
    this._selectedUser$ = this.store.pipe(select(fromUsers.selectSelectedUser));
  }

  ngOnInit() {
    this.route.paramMap.pipe(take(1)).subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });

    this._selectedUser$.pipe(takeUntil(this.unsubscribe$)).subscribe(selectedUser => {
      if (!selectedUser || (selectedUser && selectedUser.id !== this.id)) {
        return this.store.dispatch(new fromUsers.LoadUser(this.id));
      }

      this.user = selectedUser;
    });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
