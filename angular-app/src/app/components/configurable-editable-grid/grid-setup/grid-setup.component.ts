import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from '../grid-column-setup'

@Component({
  selector: 'app-grid-setup',
  templateUrl: './grid-setup.component.html',
  styleUrls: ['./grid-setup.component.scss']
})
export class GridSetupComponent implements OnInit {

  gridColumnSetupRows: GridColumnSetup[] = [];
  newRow: GridColumnSetup = { name: '', type: 'string', align: 'left', index: 0, defaultValue: '' };
  addingModeOn = false;
  allowedTypes = ['number', 'string', 'boolean'];
  allowedAligns = ['left', 'right', 'center'];

  constructor() {  }

  ngOnInit(): void {
    this.gridColumnSetupRows.push({ name: 'Name', type: 'string', align: 'left', index: 0, defaultValue: '_empty_' });
    this.gridColumnSetupRows.push({ name: 'Age', type: 'number', align: 'center', index: 1, defaultValue: 0 });
    this.gridColumnSetupRows.push({ name: 'Speaks English', type: 'boolean', align: 'center', index: 2, defaultValue: false });
    this.gridColumnSetupRows.push({ name: 'Interests', type: 'string', align: 'right', index: 3, defaultValue: '_empty_' });
  }

  resetNewRow(): void {
    this.newRow = { name: '', type: 'string', align: 'left', index: 0, defaultValue: '' };
  }

  onEditModeChange(): void {
    this.addingModeOn = !this.addingModeOn;
    if(!this.addingModeOn){
      this.newRow.index = Math.max(...this.gridColumnSetupRows.map(gcs => gcs.index)) + 1;
      this.gridColumnSetupRows.push(this.newRow);
    }

    this.resetNewRow();
  }

  onSave(): void {
    // save to local storage
  }

  // next: moving up and down to change index
  // common scss variables
  // removing selected rows (update indexes)
  // save to local storage
  
}
