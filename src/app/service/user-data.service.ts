import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserDataService {
  constructor() {}
  users() {
    return [
      { name: 'Peter', age: 29, email: 'abc@gmail.com' },
      { name: 'John', age: 25, email: 'sasa' },
      { name: 'Mary', age: 21, email: 'sasa' },
      { name: 'Sara', age: 24, email: 'sasa' },
      { name: 'Smith', age: 26, email: 'sasa' },
    ];
  }
}
