import { Component, Input, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name: string = "";
  age: number = 0;
  job: string = "";

  username: string = "";

  text: any;

  constructor(
    public readonly authService: AuthServiceService
  ) { }

  ngOnInit(): void {
    this.authService.name = "Sandy";
    this.authService.age = 21;
    this.authService.job = "Programmer";

    this.name = this.authService.name;
    this.age = this.authService.age;
    this.job = this.authService.job;
  }

  FunctionAuth(event: any){
    this.username = event;
  }

  clear() {
    this.authService.clearAuth();
  }

}
