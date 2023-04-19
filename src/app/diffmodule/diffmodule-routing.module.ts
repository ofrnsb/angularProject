import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DiffchildComponent } from './diffchild/diffchild.component';

const routes: Routes = [
  {
    // routing with different module
    path: 'child',
    component: DiffchildComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiffmoduleRoutingModule {}
