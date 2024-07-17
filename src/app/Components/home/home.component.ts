import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../myService/employee-service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  empData: any;
  userEmail: any;
  
  constructor(private post: EmployeeServiceService){}
  ngOnInit(): void {
    this.post.getEmployeeData().then(res => {
      this.empData = res.users;
      this.userEmail = res.users;
    })
  }
  
  changeHandler(event: any) {
    const email = event?.target?.value; 
    this.empData = this.userEmail.filter((item: any) => {
      return email === item.email;
    })
  }
}
