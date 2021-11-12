import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selects',
  templateUrl: './selects.component.html',
  styleUrls: ['./selects.component.css']
})
export class SelectsComponent implements OnInit {

  selectedValue: string = "";
  selectedValue2: string = "";
  selectedValue3: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
