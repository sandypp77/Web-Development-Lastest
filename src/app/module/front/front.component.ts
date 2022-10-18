import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent implements OnInit {

  constructor(
    private readonly router: Router
    
  ) { }

  ngOnInit(): void {
  }

  submitTugas1(){
    this.router.navigate(["tugas1"])
  }
  submitTugas2(){
    this.router.navigate(["tugas2"])
  }
  submitTugas3(){
    this.router.navigate(["tugas3"])
  }
  submitTugas4(){
    this.router.navigate(["tugas4"])
  }
  submitTugas5(){
    this.router.navigate(["tugas5"])
  }
}
