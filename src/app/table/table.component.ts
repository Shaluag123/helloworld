import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface Student {
  name: string;
  rollno: number;
  phoneno: number;
  address: string;
}

const ELEMENT_DATA: Student[] = [
  { name: 'shalu', rollno: 32, phoneno: 978968687, address:'mathura'},
  { name: 'xyz', rollno: 76, phoneno: 978968687, address:'mathura'},
  { name: 'abc', rollno: 10, phoneno: 978968687, address:'mathura'},
  { name: 'uyt', rollno: 65, phoneno: 978968687, address:'mathura'},
  { name: 'tanu', rollno: 87, phoneno: 978968687, address:'mathura'},
   
];

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  
})
export class TableComponent {
  displayedColumns: string[] = ['name', 'rollno', 'phoneno', 'address'];
  dataSource = ELEMENT_DATA;

}
