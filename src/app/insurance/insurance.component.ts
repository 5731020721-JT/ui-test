import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormArray} from '@angular/forms';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.scss']
})
export class InsuranceComponent implements OnInit {

  InsuranceForm:FormGroup;
  constructor() { }

  ngOnInit() {
    this.InsuranceForm = new FormGroup({
      'insuranceName':new FormControl(''),
    })
  }
  onSubmit(){
    console.log(this.InsuranceForm);
  }

}
