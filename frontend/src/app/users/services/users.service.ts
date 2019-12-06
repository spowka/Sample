import { Injectable } from '@angular/core';
import { FeathersService } from 'src/app/shared/feathers.service';

import { UserModel } from '../models';
import { Service } from '@feathersjs/feathers';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private service: Service<UserModel>;

  constructor(private feathers: FeathersService) {
    this.service = this.feathers.createService<UserModel>('user');
  }

  getUsers() {
    return this.service.find();
  }

  getUser(id: number) {
    return this.service.get(id);
  }

  updateUser(id: string, body: UserModel) {
    return this.service.update(id, body);
  }

  createUser(user: UserModel) {
    return this.service.create(user);
  }

  deleteUser(id: string) {
    return this.service.remove(id);
  }
}
