import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {

  constructor(
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }

  submitSignIn() {
    this.router.navigate(["tugas5"])
  }

  submitWelcome() {
    this.router.navigate(["tugas5/welcome"])
  }

  submitProfile() {
    this.router.navigate(["tugas5/profile"])
  }

  submitJobUpdate() {
    this.router.navigate(["tugas5/job-update"])
  }

  submitJobList() {
    this.router.navigate(["tugas5/job-list"])
  }

  submitDashboard() {
    this.router.navigate(["tugas5/dashboard"])
  }

}
