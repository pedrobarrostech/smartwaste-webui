import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule} from './_shared/shared.module';
import { SearchModule} from './search/search.module';
import { SearchComponent } from './search/search.component';
import { MapComponent } from './map/map.component';
import { NotificationComponent } from './notification/notification.component';
import { BottomNavigationComponent } from './bottom-navigation/bottom-navigation.component';
import { RoutePointModule } from './route-point/route-point.module';
import { BottomNavigationModule } from './bottom-navigation/bottom-navigation.module';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ConfirmDirective } from './_shared/_directives/confirm.directive';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    MapComponent,
    BottomNavigationComponent,
    NotificationComponent,
    ConfirmDirective
  ],
  imports: [
    SharedModule,
    AppRoutingModule,
    SearchModule,
    RoutePointModule,
    BottomNavigationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
