import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  async getEmployeeData() {
    const response = await fetch('https://dummyjson.com/users');
    const data = await response.json();
    return data;
  }
}
