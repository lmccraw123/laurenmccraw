import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BeautyComponent } from './beauty/beauty.component';
import { HouseComponent } from './house/house.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ShopComponent } from './shop/shop.component';
import { TravelComponent } from './travel/travel.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [ CommonModule ],
  declarations: []
})
export class AppRoutingModule { }

export const router: Routes = [
    { path: '', redirectTo: 'about', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'beauty' , component: BeautyComponent },
    { path: 'interiors', component: HouseComponent },
    { path: 'reviews', component: ReviewsComponent },
    { path: 'shop', component: ShopComponent },
    { path: 'travel', component: TravelComponent },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
