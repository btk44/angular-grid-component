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

  @ViewChildren(GridRowComponent) private gridRowsComponents!: QueryList<GridRowComponent>;

  constructor() { }

  ngOnInit(): void {
    this.gridColumnSetup = JSON.parse(localStorage.getItem('grid-setup')?? '{}') ?? [];
    
    // test
    if(this.gridColumnSetup.length){
      for(let i=0; i<6; i++){
        let newRow: any = [];
        for(let c=0; c<this.gridColumnSetup.length; c++){
          newRow[this.gridColumnSetup[c].name] = 'test';
        }

        this.gridRows.push(newRow);
      }
    }
  }

  onFocusLost(){
     this.gridRowsComponents.forEach(grc => grc.editModeOn = false);
     
  }

  onDoubleClick(){
    this.gridRowsComponents.forEach(grc => grc.editModeOn = false);
    this.addingModeOn = false;
  }

  onAddRow(): void {
    this.gridRowsComponents.forEach(grc => grc.editModeOn = false);
    this.addingModeOn = !this.addingModeOn;
  }
}
