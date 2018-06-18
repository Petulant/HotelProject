import { EventComponent } from './app/component/event/event.component';
import { DetailsComponent } from './app/component/details/details.component';
import { Component } from '@angular/core';
import { ViewComponent } from './app/component/view/view.component';
import { HomeComponent } from './app/component/home/home.component';
import { StatisticsComponent } from './app/component/statistics/statistics.component';


export const AppRoutes=[

 
    // {path:'statistics',component:StatisticsComponent},
    { path:'',component: HomeComponent },
    { path:'details',component:DetailsComponent, children: [
        {path:'view', component: ViewComponent},
        {path:'event', component: EventComponent}
    ]}
]; 