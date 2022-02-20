import { Component, Input, OnInit } from '@angular/core';
import { GridColumnSetup } from '../../grid-column-setup';
import { DataTypeNames, TypeNameToInputTypeMap } from '../grid-constants';

@Component({
  selector: '[app-grid-row]',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent implements OnInit {

  @Input() dataRow: any;
  @Input() columnsSetup: GridColumnSetup[] = [];
  @Input() editModeOn: boolean = false;
  
  isSelected: boolean = false;
  dataTypeNames = DataTypeNames;
  typeNameToInputTypeMap = TypeNameToInputTypeMap;

  constructor() { }

  ngOnInit(): void {
  }

}
