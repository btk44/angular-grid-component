import { Component, Input, OnInit } from '@angular/core';
import { GridColumnSetup } from '../../grid-column-setup';

@Component({
  selector: '[app-grid-row]',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent implements OnInit {

  @Input() dataRow: any;
  @Input() columnsSetup: GridColumnSetup[] = [];

  editMode = false;
  inputTypeMap = { 'string' : 'text', 'number': 'number', 'boolean' : 'checkbox'}

  constructor() { }

  ngOnInit(): void {
  }

}
