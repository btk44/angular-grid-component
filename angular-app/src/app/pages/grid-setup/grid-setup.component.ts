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
      { name: 'name', type: 'string', align: 'left', defaultValue: '_empty', order: 0 },
      { name: 'type', type: 'string', align: 'left', defaultValue: '_empty', order: 1 },
      { name: 'align', type: 'string', align: 'left', defaultValue: '_empty', order: 2 },
      { name: 'defaultValue', type: 'string', align: 'left', defaultValue: '_empty', order: 3 },
      { name: 'order', type: 'number', align: 'left', defaultValue: 0, order: 4 }
    ]
  }

  ngOnInit(): void {
    let setupDataRowsFromLS = JSON.parse(localStorage.getItem('grid-setup-data')?? '{}');

    if(setupDataRowsFromLS.length){
      this.setupDataRows = setupDataRowsFromLS;
    }
  }

  onSave(): void {
    localStorage.setItem('grid-setup-data', JSON.stringify(this.setupDataRows));
    this.saveText = 'Done!';
    setTimeout(() => this.saveText = 'Save', 1500);
  }

  // common scss variables  
}
