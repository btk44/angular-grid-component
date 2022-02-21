import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from '../../components/configurable-editable-grid/grid-column-setup'

@Component({
  selector: 'app-grid-setup',
  templateUrl: './grid-setup.component.html',
  styleUrls: ['./grid-setup.component.scss']
})
export class GridSetupComponent implements OnInit {

  columnsSetup: GridColumnSetup[] = [];

  allowedTypes = ['number', 'string', 'boolean'];
  allowedAligns = ['left', 'right', 'center'];
  saveText = 'Save';

  setupDataRows: Array<GridColumnSetup> = [];

  constructor() { 
    this.columnsSetup = [
      { name: 'name', type: 'string', align: 'left', defaultValue: '_empty' },
      { name: 'type', type: 'string', align: 'left', defaultValue: '_empty' },
      { name: 'align', type: 'string', align: 'left', defaultValue: '_empty' },
      { name: 'defaultValue', type: 'string', align: 'left', defaultValue: '_empty' }
    ]
  }

  ngOnInit(): void {
    let setupDataRowsFromLS = JSON.parse(localStorage.getItem('grid-setup-data')?? '{}');

    if(setupDataRowsFromLS.length){
      this.setupDataRows = setupDataRowsFromLS;
    }
  }

  onMoveRow(row: GridColumnSetup, direction: -1 | 1): void {
    // let selectedRowIndex = this.columnsSetup.indexOf(row);
    // let rowToSwapIndex = selectedRowIndex + direction;
    // if(rowToSwapIndex < 0 || 
    //    rowToSwapIndex >= this.columnsSetup.length){
    //   return;
    // }

    // let tmpRow = this.columnsSetup[rowToSwapIndex];
    // this.columnsSetup[rowToSwapIndex] = this.columnsSetup[selectedRowIndex];
    // this.columnsSetup[selectedRowIndex] = tmpRow;
  }

  onSave(): void {
    localStorage.setItem('grid-setup-data', JSON.stringify(this.setupDataRows));
    this.saveText = 'Done!';
    setTimeout(() => this.saveText = 'Save', 1500);
  }

  // common scss variables  
}
