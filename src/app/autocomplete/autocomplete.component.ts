import { Component, OnInit } from '@angular/core';
import {FormControl} from "@angular/forms";
import {Observable} from "rxjs";
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent implements OnInit {

  options: string[] = ['Angular', 'React', 'Vue'];
  objectOptions = [
    {name: 'Angular'},
    {name: 'React'},
    {name: 'React native'},
    {name: 'Vue'},
    {name: 'JSF'}
  ];

  // @ts-ignore
  filteredOptions: Observable<string[]>;
  myControl = new FormControl();

  constructor() { }

  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayFunction(subject: any) {
    return subject ? subject.name : undefined;
  }
}
