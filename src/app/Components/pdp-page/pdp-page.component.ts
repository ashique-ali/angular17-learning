import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdp-page',
  standalone: true,
  imports: [],
  templateUrl: './pdp-page.component.html',
  styleUrl: './pdp-page.component.css'
})
export class PdpPageComponent implements OnInit {
  pdpData: any;

  ngOnInit(): void {
    this.pdpData = history.state; 
    console.log("pdpData ::>>", this.pdpData);
  }
}
