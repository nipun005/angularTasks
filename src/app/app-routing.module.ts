import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DynamicDivsComponent } from './dynamic-divs/dynamic-divs.component';
import { EcommercePageComponent } from './ecommerce-page/ecommerce-page.component';
import { FloatingBannerComponent } from './floating-banner/floating-banner.component';
import { FloatingBannerModule } from './floating-banner/floating-banner.module';
import { HomePageComponent } from './home-page/home-page.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { TimerAppComponent } from './timer-app/timer-app.component';
import { TimerServiceAppComponent } from './timer-service-app/timer-service-app.component';

const routes: Routes = [
  {path: '',  
  redirectTo: '/home',  
  pathMatch: 'full'},
  {path:'home', component: HomePageComponent},
  {path:'floatingbanner',
  component: FloatingBannerComponent,
  loadChildren: () => import('./floating-banner/floating-banner.module').then(m => m.FloatingBannerModule) },
  {path:'ecommercepage',
  component: EcommercePageComponent,
  loadChildren: () => import('./ecommerce-page/ecommerce-page.module').then(m => m.EcommercePageModule) },
  {path:'timerapp',
  component: TimerAppComponent,
  loadChildren: () => import('./timer-app/timer-app.module').then(m => m.TimerAppModule) },
  {path:'timerserviceapp',
  component: TimerServiceAppComponent,
  loadChildren: () => import('./timer-service-app/timer-service-app.module').then(m => m.TimerServiceAppModule) },
  {path:'studentmarks',
  component: StudentMarksComponent,
  loadChildren: () => import('./student-marks/student-marks.module').then(m => m.StudentMarksModule) },
  {path:'dynamicdivs',
  component: DynamicDivsComponent,
  loadChildren: () => import('./dynamic-divs/dynamic-divs.module').then(m => m.DynamicDivsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
