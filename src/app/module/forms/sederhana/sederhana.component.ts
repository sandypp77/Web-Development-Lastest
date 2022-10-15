import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sederhana',
  templateUrl: './sederhana.component.html',
  styleUrls: ['./sederhana.component.scss']
})
export class SederhanaComponent implements OnInit {

  displayName: any;

  formGroupSederhana = new FormGroup({
    name: new FormControl(''),
    nickname: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(20)]),
    job: new FormControl('Angular Developer'),
    balance: new FormControl('9999')
  });

  constructor() {
    this.formGroupSederhana.controls["name"].setValue("Sandy Pratama Poetra");
    this.formGroupSederhana.get('nickname')?.setValue("Sandy")

    this.displayName = this.formGroupSederhana.controls['name'].value;
   }

  ngOnInit(): void {
  }

  checkValidation() {
    alert(this.formGroupSederhana.controls['email'].valid);
  }

}
