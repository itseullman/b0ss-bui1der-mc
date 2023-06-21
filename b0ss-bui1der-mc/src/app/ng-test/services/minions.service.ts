import { Injectable } from '@angular/core';
import { Minion } from '../ng-test';

// services are singleton/init'd once when provided in root
// to have specific instances, add service to providers array of the @Component
// injection starts at Component level and checks for listed Providers first before root providers
@Injectable({
  providedIn: 'root'
})
export class MinionsService {

  MinionList: Minion[] = [
    {
      name: 'One',
      maxCount: 10,
      createdDate: new Date()
    },
    {
      name: 'Two',
      maxCount: 20,
      createdDate: new Date()
    },
    {
      name: 'Three',
      maxCount: 30,
      createdDate: new Date()
    }
  ]

  constructor() { }

  getMinions() {
    return this.MinionList;
  }

}
