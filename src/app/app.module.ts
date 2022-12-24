import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './routing';

//Servicios
import { UserGuard } from './components/services/user.guard';
import { NoIdentityGuard } from './components/services/nologin';
import { UserService } from './components/services/user.service';


import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { InventoryComponent } from './components/inventory/inventory.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    InventoryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    NoIdentityGuard,
    UserGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
