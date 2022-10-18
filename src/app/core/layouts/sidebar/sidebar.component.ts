import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(
    private readonly router:Router
  ) { }

  ngOnInit(): void {
  }

  submitListTugas(){
    this.router.navigate([""])
  }

  submitJobStatus(){
    alert("Untuk saat ini job status belum ada")
  }

  submitSchedule(){
    alert("Untuk saat ini interview schedule belum ada")
  }

  submitJobPosting(){
    alert("Untuk saat ini job posting belum ada")
  }

  submitProfileUpdate(){
    this.router.navigate(["forms/profile-update"])
  }

}
