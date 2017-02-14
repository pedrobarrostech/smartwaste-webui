import { NgModule } from '@angular/core';

import { MapRouteMenuComponent } from './map-route-menu.component';

//import { MapRouteMenuService } from '../_shared/_services/MapRouteMenu.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    //MapRouteMenuComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
  ],
  providers: [
    //MapRouteMenuService
  ]
})
export class MapRouteMenuModule { }