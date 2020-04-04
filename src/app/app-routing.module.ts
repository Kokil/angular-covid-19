import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPageComponent } from './pages/dashboard/dashboard.component';
import { CountryTablePageComponent } from './pages/country-table/country-table.component';
import { CountryPageComponent } from './pages/country/country.component';


const routes: Routes = [
  { path: '', component: DashboardPageComponent, data: {title: 'COVID 19 - Stats Tracker | Dashboard'} },
  { path: 'cases/:type', component: CountryTablePageComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'cases', component: CountryTablePageComponent, data: {title: 'COVID 19 - Stats Tracker | Report by Country'} },
  { path: 'country/:countryName', component: CountryPageComponent, data: {title: 'COVID 19 - Stats Tracker | Country'} },
  { path: '**', component: DashboardPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
