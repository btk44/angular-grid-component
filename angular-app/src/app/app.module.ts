import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridSetupComponent } from './components/configurable-editable-grid/grid-setup/grid-setup.component';
import { GridComponent } from './components/configurable-editable-grid/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    GridSetupComponent,
    GridComponent
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
