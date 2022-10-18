import { Component, OnInit } from '@angular/core';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  styles: [`
    .star {
      font-size: 1.5rem;
      color: #b0c4de;
    }
    .filled {
      color: #1e90ff;
    }
    .bad {
      color: #deb0b0;
    }
    .filled.bad {
      color: #ff1e1e;
    }
  `]
})
export class ProfileComponent implements OnInit {

  currentRate = 6;

  name = "";
  age = 0;
  job = "";

  text: any;

  constructor(
    public readonly profileService: ProfileService
  ) { }

  ngOnInit(): void {
    this.profileService.name = "Sandy";
    this.profileService.age = 21;
    this.profileService.job = "Programmer";

    this.name = this.profileService.name;
    this.age = this.profileService.age;
    this.job = this.profileService.job;
  }

  iniFunction(event: any){
    this.text = event;
  }

  clear() {
    this.profileService.clearProfile();
  }
}
