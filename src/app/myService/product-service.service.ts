import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor() { }
  async getproductList() {
    const response = await fetch('https://dummyjson.com/recipes');
    const data = await response.json();
    return data;
  }
}
