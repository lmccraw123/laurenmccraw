import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './/app-routing.module';

import { routes } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { AboutComponent } from './about/about.component';
import { TravelComponent } from './travel/travel.component';
import { ShopComponent } from './shop/shop.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { HouseComponent } from './house/house.component';
import { BeautyComponent } from './beauty/beauty.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    TravelComponent,
    ShopComponent,
    ReviewsComponent,
    HouseComponent,
    BeautyComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    HttpClientModule,
    AppRoutingModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
