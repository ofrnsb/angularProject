import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiffmoduleRoutingModule } from './diffmodule-routing.module';
import { DiffchildComponent } from './diffchild/diffchild.component';


@NgModule({
  declarations: [
    DiffchildComponent
  ],
  imports: [
    CommonModule,
    DiffmoduleRoutingModule
  ]
})
export class DiffmoduleModule { }
