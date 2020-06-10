import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  detail: string;
  value: number;  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {detail:"ค่าแพทย์",value:1000}, {detail:"ค่ายา",value:500}
];

@Component({
  selector: 'app-medical-fee',
  templateUrl: './medical-fee.component.html',
  styleUrls: ['./medical-fee.component.scss']
})
export class MedicalFeeComponent implements OnInit {

  displayedColumns: string[] = ['detail', 'value'];
  displayedColumns2: string[] = ['amountText','amount'];
  paymentData = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}
