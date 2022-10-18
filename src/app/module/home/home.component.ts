import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ImagePath: string;

  constructor(
    private readonly router: Router
  ) { 
    this.ImagePath = '/assets/images/Jobs.png'
  }

  ngOnInit(): void {
  }

  backList(){
    this.router.navigate([""])
  }

}
