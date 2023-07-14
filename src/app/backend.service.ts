import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root',
})
export class BackendService implements InMemoryDbService {
  constructor() {}
  createDb() {
    let people = [
      { id: 1, name: 'John', email: 'john@email.com' },
      { id: 2, name: 'Jim', email: 'jim@email.com' },
      { id: 3, name: 'Bob', email: 'bob@email.com' },
    ];

    return { people };
  }
}
