import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from 'src/app/components/configurable-editable-grid/grid-column-setup';

@Component({
  selector: 'app-grid-generated',
  templateUrl: './grid-generated.component.html',
  styleUrls: ['./grid-generated.component.scss']
})
export class GridGeneratedComponent implements OnInit {

  gridColumnSetup: GridColumnSetup[] = [];
  gridRows: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const columnSetupFromLS = JSON.parse(localStorage.getItem('grid-setup')?? '{}');
    const gridDataFromLS =  JSON.parse(localStorage.getItem('grid-data')?? '{}');

    this.gridColumnSetup = columnSetupFromLS.length ? columnSetupFromLS : [];
    this.gridRows = gridDataFromLS.length ? gridDataFromLS : [];
  }

}
