import { Routes } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';


import { AppRoutingModule } from './app-routing.module';
import { FormStyle } from '@angular/common';
import { GaugeModule } from 'angular-gauge';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatSelectModule } from '@angular/material/select'
import { MatFormFieldModule } from '@angular/material/form-field';


import { HomeComponent } from './components/home/home.component';

import { HttpHeaderInterceptor } from './interceptors/http-params.interceptor';

import { NgxPaginationModule } from 'ngx-pagination';
import { AboutComponent } from './components/about/about.component';
import { AuthComponent } from './components/auth/auth.component'




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTabsModule,
    NgxPaginationModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    HttpClientModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBsxEeBD3S0fNwj2KnUgxCuha71tHAyRZs",
      authDomain: "movie-app-1212.firebaseapp.com",
      projectId: "movie-app-1212",
      storageBucket: "movie-app-1212.appspot.com",
      messagingSenderId: "1065723238910",
      appId: "1:1065723238910:web:ca61a214d6556ad75cc8af",
      measurementId: "G-S0P6J0YPXE"

    }),
    AngularFirestoreModule,
    GaugeModule.forRoot()
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
