import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS  } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './helpers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JwtInterceptor, ErrorInterceptor } from './helpers';
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
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ 

    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // para criar o fake back end
    fakeBackendProvider],

  bootstrap: [AppComponent]
 

})
export class AppModule { }
