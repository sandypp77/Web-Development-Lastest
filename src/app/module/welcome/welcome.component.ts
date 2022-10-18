import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  ImagePathMobile: string;
  ImagePathDesktop: string;

  constructor(
    private readonly router:Router
  ) {
    this.ImagePathMobile = '/assets/images/image-hero-mobile.png'
    this.ImagePathDesktop = '/assets/images/image-hero-desktop.png'
   }

  ngOnInit(): void {
  }

  submitSignIn() {
    this.router.navigate(["tugas5"])
  }

}
