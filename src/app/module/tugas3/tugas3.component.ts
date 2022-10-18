import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/auth/login.service';
import { ProfileService } from 'src/app/services/profile/profile.service';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  styleUrls: ['./tugas3.component.scss']
})
export class Tugas3Component implements OnInit {

  text: any;
  displayName: any;

  formGroupProfile = new FormGroup({})

  formGroupLogin = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  })

  formGroupSederhana = new FormGroup({
    name: new FormControl(''),
    nickname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(20)]),
    job: new FormControl('Angular Developer'),
    balance: new FormControl('9999')
  });

  constructor(
    private readonly router:Router,
    private readonly loginService: LoginService,
    private readonly ProfileService: ProfileService
  ) {
    this.formGroupSederhana.controls["name"].setValue("Sandy Pratama Poetra");
    this.formGroupSederhana.get('nickname')?.setValue("Sandy")

    this.displayName = this.formGroupSederhana.controls['name'].value;
   }

  ngOnInit(): void {
  }

  checkValidation() {
    alert(this.formGroupSederhana.controls['email'].valid);
  }

  backList(){
    this.router.navigate([""])
  }

  submitLogin() {
    if(this.formGroupLogin.valid){
      this.loginService.postLogin(this.formGroupLogin.value).subscribe({
        next: (response) => {
          alert('success');
          alert(JSON.stringify(response));
        },
        error: (error) => {
          alert(JSON.stringify(error));
        }
      });
    }else{
      alert('Form Not Valid');
    }
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
