import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from 'src/app/services/login/auth-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tugas2',
  templateUrl: './tugas2.component.html',
  styleUrls: ['./tugas2.component.scss']
})
export class Tugas2Component implements OnInit {

  name: string = "";
  age: number = 0;
  job: string = "";

  username: string = "";
  password: string = "";

  text: any;

  constructor(
    private readonly router: Router,
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

  FunctionAuthUsername(event: any){
    this.username = event;
  }

  FunctionAuthPassword(event: any){
    this.password = event;
  }

  clear() {
    this.username = "";
    this.password = "";
  }

  backList(){
    this.router.navigate([""])
  }

}
