import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GridColumnSetup } from '../../grid-column-setup';
import { DataTypeNames, TypeNameToInputTypeMap } from '../grid-constants';

@Component({
  selector: '[app-grid-row]',
  templateUrl: './grid-row.component.html',
  styleUrls: ['./grid-row.component.scss']
})
export class GridRowComponent implements OnInit {

  @Input() columnsSetup: GridColumnSetup[] = [];
  @Input() editModeOn: boolean = false;
  @Input() dataRow: any;
  @Output() dataRowChange = new EventEmitter();
  
  isSelected: boolean = false;
  dataTypeNames = DataTypeNames;
  typeNameToInputTypeMap = TypeNameToInputTypeMap;

  constructor() { }

  ngOnInit(): void {
  }
}
