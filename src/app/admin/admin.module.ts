import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {AboutComponent} from "./about/about.component";
import {MyProfileComponent} from "./my-profile/my-profile.component";
import {AppRoutingModule} from "../app-routing.module";
import {DashboardService} from "../dashboard.service";


@NgModule({
  declarations: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    DashboardComponent,
    AboutComponent,
    MyProfileComponent
  ],
  providers: [ DashboardService ]
})
export class AdminModule { }
