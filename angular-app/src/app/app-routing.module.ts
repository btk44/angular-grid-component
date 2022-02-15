import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GridSetupComponent } from './pages/grid-setup/grid-setup.component';
import { GridGeneratedComponent } from './pages/grid-generated/grid-generated.component';

const routes: Routes = [
  { path: 'grid-setup', component: GridSetupComponent },
  { path: 'grid-generated', component: GridGeneratedComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
