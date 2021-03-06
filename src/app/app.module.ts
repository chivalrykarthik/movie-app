import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DataService } from './service/data.service';
import {ListComponent} from './component/list/list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecommendationComponent } from './component/recommendation/recommendation.component';
import { PopupComponent } from './component/popup/popup.component';
@NgModule({
  declarations: [
    AppComponent,
    RecommendationComponent,
    DashboardComponent,
    ListComponent,
    PopupComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
