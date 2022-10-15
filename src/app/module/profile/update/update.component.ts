import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {

  displayName: any;

  formGroupUpdate = new FormGroup({
    name: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(20)]),
    birthday: new FormControl(''),
    address: new FormControl('')
  });

  constructor(
  ) { 
    this.formGroupUpdate.controls["name"].setValue("");

    this.displayName = this.formGroupUpdate.controls['name'].value;
  }

  ngOnInit(): void {
  }

  checkValidation() {
    alert(this.formGroupUpdate.controls['email'].valid);
  }

}
