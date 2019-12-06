import { Injectable } from '@angular/core';

import * as io from 'socket.io-client';

import feathers, { Service } from '@feathersjs/feathers';
import feathersSocketIOClient from '@feathersjs/socketio-client';


@Injectable({
  providedIn: 'root'
})
export class FeathersService {
  private feathers = feathers();
  private socket = io('http://localhost:3030');


  constructor() {
    this.feathers.configure(feathersSocketIOClient(this.socket));
    }

  public createService<T>(name: string): Service<T> {
    return this.feathers.service(name);
  }

}
