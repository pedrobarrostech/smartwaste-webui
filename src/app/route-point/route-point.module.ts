import { NgModule } from '@angular/core';

import { RoutePointComponent } from './route-point.component';

//import { RoutePointService } from '../_shared/_services/RoutePoint.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    RoutePointComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
  ],
  providers: [
    //RoutePointService
  ]
})
export class RoutePointModule { }