import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ViewComponent } from './component/view/view.component';
import { AppRoutes } from '../app.routes.module';
import { StatisticsComponent } from './component/statistics/statistics.component';
import { EventComponent } from './component/event/event.component';
import { DetailsComponent } from './component/details/details.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewComponent,
    StatisticsComponent,
    EventComponent,
    DetailsComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(AppRoutes),
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
