import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  selectedIndex: number;

  constructor() {
    this.selectedIndex = 0;
  }

  ngOnInit(): void {
  }

  logChange(index: any) {
    console.log(index);
    this.selectedIndex = index;
  }
}
