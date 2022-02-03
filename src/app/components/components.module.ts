import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { HorizontalBarGraphComponent } from './horizontal-bar-graph/horizontal-bar-graph.component';

@NgModule({
  declarations: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
  exports: [
    NavbarComponent,
    HorizontalBarGraphComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ComponentsModule { }
