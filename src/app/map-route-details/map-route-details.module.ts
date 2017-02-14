import { NgModule } from '@angular/core';

import { MapRouteDetailsComponent } from './map-route-details.component';

//import { MapRouteDetailsService } from '../_shared/_services/MapRouteDetails.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    //MapRouteDetailsComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
  ],
  providers: [
    //MapRouteDetailsService
  ]
})
export class MapRouteDetailsModule { }