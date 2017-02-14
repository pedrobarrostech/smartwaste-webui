import { NgModule } from '@angular/core';

import { MapComponent } from './map.component';

//import { MapService } from '../_shared/_services/Map.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    //MapComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
  ],
  providers: [
    //MapService
  ]
})
export class MapModule { }