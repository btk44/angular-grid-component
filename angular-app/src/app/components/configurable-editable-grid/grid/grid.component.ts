import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from '../grid-column-setup';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  gridColumnSetup: GridColumnSetup[] = [];
  gridRows: any[] = [];
  addingModeOn: boolean = false;

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

  onAddRow(): void {
      this.addingModeOn = !this.addingModeOn;
  }
}
