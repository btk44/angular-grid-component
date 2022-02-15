import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridSetupComponent } from './pages/grid-setup/grid-setup.component';
import { GridComponent } from './components/configurable-editable-grid/grid/grid.component';
import { GridRowComponent } from './components/configurable-editable-grid/grid/grid-row/grid-row.component';
import { GridGeneratedComponent } from './pages/grid-generated/grid-generated.component';

@NgModule({
  declarations: [
    AppComponent,
    GridSetupComponent,
    GridComponent,
    GridRowComponent,
    GridGeneratedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
