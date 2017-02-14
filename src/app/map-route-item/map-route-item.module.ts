import { NgModule } from '@angular/core';

import { MapRouteItemComponent } from './map-route-item.component';

//import { MapRouteItemService } from '../_shared/_services/MapRouteItem.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    //MapRouteItemComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
  ],
  providers: [
    //MapRouteItemService
  ]
})
export class MapRouteItemModule { }