import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-tugas1',
  templateUrl: './tugas1.component.html',
  styleUrls: ['./tugas1.component.scss']
})
export class Tugas1Component implements OnInit {

  constructor(
    private readonly router: Router
  ) {
    
  }

  ngOnInit(): void {
  }

  backList(){
    this.router.navigate([""])
  }
}
