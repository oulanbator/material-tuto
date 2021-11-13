import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox-radio',
  templateUrl: './checkbox-radio.component.html',
  styleUrls: ['./checkbox-radio.component.css']
})
export class CheckboxRadioComponent implements OnInit {

  radioValue: string = "";
  checkboxAngular: boolean = false;
  checkboxReact: boolean = false;
  checkboxVue: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}
