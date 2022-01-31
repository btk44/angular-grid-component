import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from '../grid-column-setup'

@Component({
  selector: 'app-grid-setup',
  templateUrl: './grid-setup.component.html',
  styleUrls: ['./grid-setup.component.scss']
})
export class GridSetupComponent implements OnInit {

  gridColumnSetupRows: GridColumnSetup[] = [];
  newRow: GridColumnSetup = { name: '', type: 'string', align: 'left', defaultValue: '' };
  addingModeOn = false;
  allowedTypes = ['number', 'string', 'boolean'];
  allowedAligns = ['left', 'right', 'center'];
  rowSelectionStatusArray: boolean[] = [];

  constructor() {  }

  ngOnInit(): void {
    this.gridColumnSetupRows.push({ name: 'Name', type: 'string', align: 'left', defaultValue: '_empty_' });
    this.gridColumnSetupRows.push({ name: 'Age', type: 'number', align: 'center', defaultValue: 0 });
    this.gridColumnSetupRows.push({ name: 'Speaks English', type: 'boolean', align: 'center', defaultValue: false });
    this.gridColumnSetupRows.push({ name: 'Interests', type: 'string', align: 'right', defaultValue: '_empty_' });

    this.rowSelectionStatusArray = new Array(this.gridColumnSetupRows.length).fill(false);
  }

  resetNewRow(): void {
    this.newRow = { name: '', type: 'string', align: 'left', defaultValue: '' };
  }

  onEditModeChange(): void {
    this.addingModeOn = !this.addingModeOn;
    if(!this.addingModeOn){
      this.gridColumnSetupRows.push(this.newRow);
      this.rowSelectionStatusArray.push(false);
    }

    this.resetNewRow();
  }

  onSelectAll($event: any): void {
    this.rowSelectionStatusArray.fill($event.target.checked);
  }

  onMoveRow(row: GridColumnSetup, direction: -1 | 1): void {
    let selectedRowIndex = this.gridColumnSetupRows.indexOf(row);
    let rowToSwapIndex = selectedRowIndex + direction;
    if(rowToSwapIndex < 0 || 
       rowToSwapIndex >= this.gridColumnSetupRows.length){
      return;
    }

    let tmpRow = this.gridColumnSetupRows[rowToSwapIndex];
    this.gridColumnSetupRows[rowToSwapIndex] = this.gridColumnSetupRows[selectedRowIndex];
    this.gridColumnSetupRows[selectedRowIndex] = tmpRow;
  }

  onRemove(): void {
    let previousLenth = this.gridColumnSetupRows.length;
    this.gridColumnSetupRows = this.gridColumnSetupRows.filter((gcsr, index) => !this.rowSelectionStatusArray[index]);
    for(let i=0; i < previousLenth - this.gridColumnSetupRows.length; i++){
      this.rowSelectionStatusArray.pop();
    }
    this.rowSelectionStatusArray.fill(false);
  }

  onSave(): void {
    // save to local storage
  }

  // next: moving up and down to change index
  // common scss variables
  // removing selected rows (update indexes)
  // save to local storage
  
}
