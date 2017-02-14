import { NgModule } from '@angular/core';

import { BottomNavigationComponent } from './bottom-navigation.component';

//import { BottomNavigationService } from '../_shared/_services/BottomNavigation.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
   // BottomNavigationComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
  ],
  providers: [
    //BottomNavigationService
  ]
})
export class BottomNavigationModule { }