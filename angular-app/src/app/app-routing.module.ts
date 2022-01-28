import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSetupComponent } from './components/configurable-editable-grid/grid-setup/grid-setup.component';
import { GridComponent } from './components/configurable-editable-grid/grid/grid.component';

const routes: Routes = [
  { path: 'grid-setup', component: GridSetupComponent },
  { path: 'grid', component: GridComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
