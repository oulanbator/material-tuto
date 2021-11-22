import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {DialogExampleComponent} from "../dialog-example/dialog-example.component";

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent, {data: {name: 'Victor'}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result : ${result}`);
    })
  }

}
