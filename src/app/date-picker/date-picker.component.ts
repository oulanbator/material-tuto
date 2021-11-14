import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date(); // Today's date
  maxDate = new Date(2022, 2, 24); // 24 MARS 2022 (month starts at 0)

  constructor() { }

  ngOnInit(): void {
  }

  // @ts-ignore
  dateFilter = date => {
    const day = date.getDay();
    return day != 0 && day != 6;
  }
}
