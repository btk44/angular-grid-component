import { Component, OnInit } from '@angular/core';
import { GridColumnSetup } from '../grid-column-setup';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  gridColumnSetup: GridColumnSetup[] = [];

  constructor() { }

  ngOnInit(): void {
    this.gridColumnSetup = JSON.parse(localStorage.getItem('grid-setup')?? '{}');

  }

}
