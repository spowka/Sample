import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { Observable, Subject } from 'rxjs';
import * as fromRoot from 'src/app/@store';
import * as fromUsers from 'src/app/users/@store';

import { UserModel, UserStatuses } from '../../models';
import { select, Store } from '@ngrx/store';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.scss']
})
export class UserUpdateComponent implements OnInit, OnDestroy {
  public users$: Observable<UserModel[]>;

  public isLoading$: Observable<boolean>;

  public selectedUser$: Observable<UserModel>;

  public userForm: FormGroup;

  public id: number;

  public isNew = false;

  public userStatuses = ['male', 'female', 'other'];

  private unsubscribe$: Subject<void> = new Subject();

  constructor(
    private store: Store<fromRoot.State>,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.users$ = this.store.pipe(select(fromUsers.selectUsers));
    this.isLoading$ = this.store.pipe(select(fromUsers.selectLoading));
    this.selectedUser$ = this.store.pipe(select(fromUsers.selectSelectedUser));

    this.userForm = this.fb.group({
      name: [{ value: '', disabled: true }],
      dateOfBirth: [{ value: '', disabled: true }, Validators.compose([Validators.required, Validators.minLength(1)])],
      email: [{ value: '', disabled: true }, Validators.compose([Validators.required, Validators.email, Validators.minLength(1)])],
      status: [{ value: '', disabled: true }, Validators.required],
      hourlyRate: [{ value: '', disabled: true }],
    });
  }

  ngOnInit() {
    this.users$.pipe(takeUntil(this.unsubscribe$)).subscribe(users => {
      if (!users) {
        return this.store.dispatch(new fromUsers.LoadUsers());
      }
    });

    if (this.route.routeConfig.path === 'create') {
      // create
      this.userForm.enable();
      return this.isNew = true;
    }

    // update
    this.route.paramMap.pipe(take(1)).subscribe((params: ParamMap) => {
      this.id = +params.get('id');
    });

    this.selectedUser$.pipe(takeUntil(this.unsubscribe$)).subscribe(selectedUser => {
      if (!selectedUser || (selectedUser && selectedUser.id !== this.id)) {
        return this.store.dispatch(new fromUsers.LoadUser(this.id));
      }

      this.userForm.patchValue({
        name: selectedUser.name,
        dateOfBirth: selectedUser.dateOfBirth,
        email: selectedUser.email,
        status: selectedUser.status,
        hourlyRate: selectedUser.hourlyRate,
      });
      this.userForm.enable();
    });
  }

  onSave(): void {
    if (!this.userForm.valid) {
      return;
    }

    // create
    if (this.isNew) {
      const user: UserModel = {
        name: this.userForm.get('name').value,
        dateOfBirth: this.userForm.get('dateOfBirth').value,
        email: this.userForm.get('email').value,
        status: this.userForm.get('status').value,
        hourlyRate: this.userForm.get('hourlyRate').value,
      };

      return this.store.dispatch(new fromUsers.CreateUser(user));
    }

    // update
    this.store.dispatch(new fromUsers.UpdateUser({
      id: this.id,
      data: this.userForm.value,
    }));
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
