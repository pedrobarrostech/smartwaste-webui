import { NgModule } from '@angular/core';

import { NotificationComponent } from './notification.component';

//import { NotificationService } from '../_shared/_services/Notification.service';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { RouterModule }   from '@angular/router';

@NgModule({
  declarations: [
    //NotificationComponent
  ],
  imports: [
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      RouterModule
  ],
  providers: [
    //NotificationService
  ]
})
export class NotificationModule { }