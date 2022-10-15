import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  text: any;

  formGroupProfile = new FormGroup({})

  constructor(
    private readonly ProfileService: ProfileService
  ) { }

  ngOnInit(): void {
  }

  submitGet() {
    this.ProfileService.getProfile().subscribe({
      next: (response) => {
        alert('success');
        alert(JSON.stringify(response));
        this.text = JSON.stringify(response);
      },
      error: (error) => {
        alert(JSON.stringify(error));
      }
    });
  }

  submitPost() {
    this.ProfileService.postProfile(this.formGroupProfile.value).subscribe({
      next: (response) => {
        alert('success');
        alert(JSON.stringify(response));
        this.text = JSON.stringify(response);
      },
      error: (error) => {
        alert(JSON.stringify(error));
      }
    });
  }
}
