import { Injectable } from '@angular/core';
import { FeathersService } from 'src/app/shared/feathers.service';

import { JobModel } from '../models';
import { Service } from '@feathersjs/feathers';

@Injectable({
  providedIn: 'root'
})
export class JobsService {

  private service: Service<JobModel>;

  constructor(private feathers: FeathersService) {
    this.service = this.feathers.createService<JobModel>('job');
  }

  getJobs() {
    return this.service.find();
  }

  getJob(id: number) {
    return this.service.get(id);
  }

  updateJob(id: string, body: JobModel) {
    return this.service.update(id, body);
  }

  createJob(job: JobModel) {
    return this.service.create(job);
  }

  deleteJob(id: string) {
    return this.service.remove(id);
  }
}
