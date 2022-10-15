import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  name: string = "";
  age: number = 0;
  job: string = "";

  constructor() { }

  clearAuth() {
    this.name = "";
    this.age = 0;
    this.job = "";
  }
}
