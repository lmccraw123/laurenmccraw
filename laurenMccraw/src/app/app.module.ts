import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
