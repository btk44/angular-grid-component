import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from 'src/app/components/configurable-editable-grid/grid-column-setup';

@Component({
  selector: 'app-grid-generated',
  templateUrl: './grid-generated.component.html',
  styleUrls: ['./grid-generated.component.scss']
})
export class GridGeneratedComponent implements OnInit {

  columnsSetup: GridColumnSetup[] = [];
  dataRows: any[] = [];

  constructor() { }

  ngOnInit(): void {
    const columnsSetupFromLS = JSON.parse(localStorage.getItem('grid-setup-data')?? '{}');
    const dataRowsFromLS =  JSON.parse(localStorage.getItem('grid-data')?? '{}');

    this.columnsSetup = columnsSetupFromLS.length ? columnsSetupFromLS : [];
    this.dataRows = dataRowsFromLS.length ? dataRowsFromLS : [];
  }

}
