import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../../myService/product-service.service';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit {
  pdpList: any;
  num = 200;
  constructor(private posts: ProductServiceService){}
  
  ngOnInit(): void {
    this.posts.getproductList().then(res => {
      this.pdpList = res.recipes;
    })
  }
}
