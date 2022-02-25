import { Component, EventEmitter, Input, OnInit, Output, QueryList, ViewChildren } from '@angular/core';
import { GridColumnSetup } from '../grid-column-setup';
import { GridRowComponent } from './grid-row/grid-row.component';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  @Input() columnsSetupIn: GridColumnSetup[] = [];
  @Input() dataRowsIn: Array<object> = [];
  @Output() dataRowsInChange = new EventEmitter();

  addingModeOn: boolean = false;
  newRow: any = {};
  saveText = 'Save';
  isCheckedAll = false;
  isAnyRowSelected = false;

  @ViewChildren(GridRowComponent) private gridRowsComponents!: QueryList<GridRowComponent>;

  constructor() { }

  ngOnInit(): void {
    this.resetNewRow();
  }

  onEscOrEnter(gridRowComponent: GridRowComponent){
     gridRowComponent.editModeOn = false;
  }

  onDoubleClick(){
    this.gridRowsComponents.forEach(grc => grc.editModeOn = false);
    this.addingModeOn = false;
    this.resetNewRow();
  }

  onAddRow(): void {
    this.gridRowsComponents.forEach(grc => grc.editModeOn = false);
    this.addingModeOn = !this.addingModeOn;
    if(!this.addingModeOn){
      this.dataRowsIn.push(this.newRow);
      this.resetNewRow();
    }
    this.onSelectAll({target: {checked: false}});
  }

  onRowSelectionChange(): void {
    this.isAnyRowSelected = this.gridRowsComponents.some(grc => grc.isSelected);
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

  onCancelAddRow(): void {
    this.addingModeOn = false;
    this.resetNewRow();
  }

  onSelectAll($event: any): void {
    this.isCheckedAll = $event.target.checked;
    this.gridRowsComponents.forEach(grc => grc.isSelected = $event.target.checked);
    this.onRowSelectionChange();
  }

  onRemoveRows(): void {
    let rowsToRemove = this.gridRowsComponents.filter(grc => grc.isSelected).map(grc => grc.dataRow);
    this.dataRowsIn = this.dataRowsIn.filter(gr => rowsToRemove.indexOf(gr) === -1);
    this.isCheckedAll = false;
    this.dataRowsInChange.emit(this.dataRowsIn);
  }
  
  resetNewRow(): Array<any> {
    this.newRow = {};
    
    if(this.columnsSetupIn.length){
      this.columnsSetupIn.forEach(gcs => this.newRow[gcs.name] = gcs.defaultValue);
    }

    return this.newRow;
  }
}
