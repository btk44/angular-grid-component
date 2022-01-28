import { Component, OnInit } from '@angular/core';
import { GridColumnSetup, GridColumnSetupFieldNames } from '../grid-column-setup'

@Component({
  selector: 'app-grid-setup',
  templateUrl: './grid-setup.component.html',
  styleUrls: ['./grid-setup.component.scss']
})
export class GridSetupComponent implements OnInit {

  gridColumnSetupFieldNames = GridColumnSetupFieldNames

  constructor() { }

  ngOnInit(): void {
  }

}
