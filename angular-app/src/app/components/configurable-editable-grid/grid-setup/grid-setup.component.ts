import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from '../grid-column-setup'

@Component({
  selector: 'app-grid-setup',
  templateUrl: './grid-setup.component.html',
  styleUrls: ['./grid-setup.component.scss']
})
export class GridSetupComponent implements OnInit {

  gridColumnSetupRows: GridColumnSetup[] = [];

  constructor() { }

  ngOnInit(): void {
    this.gridColumnSetupRows.push({ name: 'Name', type: 'string', align: 'left', index: 0 });
    this.gridColumnSetupRows.push({ name: 'Age', type: 'number', align: 'center', index: 1 });
    this.gridColumnSetupRows.push({ name: 'Speaks English', type: 'boolean', align: 'center', index: 2 });
    this.gridColumnSetupRows.push({ name: 'Interests', type: 'string', align: 'right', index: 3 });
  }

}
