import { Component, OnInit, QueryList, ViewChildren } from '@angular/core';
import { GridColumnSetup } from '../grid-column-setup';
import { GridRowComponent } from './grid-row/grid-row.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  gridColumnSetup: GridColumnSetup[] = [];
  gridRows: any[] = [];
  addingModeOn: boolean = false;
  newRow: any = [];
  saveText = 'Save';

  @ViewChildren(GridRowComponent) private gridRowsComponents!: QueryList<GridRowComponent>;

  constructor() { }

  ngOnInit(): void {
    const columnSetupFromLS = JSON.parse(localStorage.getItem('grid-setup')?? '{}');
    const gridDataFromLS =  JSON.parse(localStorage.getItem('grid-data')?? '{}');

    this.gridColumnSetup = columnSetupFromLS.length ? columnSetupFromLS : [];
    this.gridRows = gridDataFromLS.length ? gridDataFromLS : [];

    this.resetNewRow();
  }

  onEscOrEnter(gridRowComponent: GridRowComponent){
     gridRowComponent.editModeOn = false;
  }

  onDoubleClick(){
    this.gridRowsComponents.forEach(grc => grc.editModeOn = false);
    this.addingModeOn = false;
  }

  onAddRow(): void {
    this.gridRowsComponents.forEach(grc => grc.editModeOn = false);
    this.addingModeOn = !this.addingModeOn;
    if(!this.addingModeOn){
      this.gridRows.push(this.newRow);
      this.resetNewRow();
    }
  }

  onSave(): void {
    localStorage.setItem('grid-data', JSON.stringify(this.gridRows));
    this.saveText = 'Done!';
    setTimeout(() => this.saveText = 'Save', 1500); // make subject to debounce
  }

  resetNewRow(): Array<any> {
    this.newRow = [];
    
    if(this.gridColumnSetup.length){
      this.gridColumnSetup.forEach(gcs => this.newRow[gcs.name] = gcs.defaultValue);
    }

    return this.newRow;
  }
}
