import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'table-component',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
