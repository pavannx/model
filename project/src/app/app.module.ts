import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampeonatoComponent } from './campeonato/campeonato.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router'; 

const appRoutes:Routes =[
 

  {
    path: '',
    component: LoginComponent
  },

  {
    path: 'dashboard',
    component: DashboardComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    CampeonatoComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
