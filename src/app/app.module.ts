import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { LogoComponent } from './core/components/logo/logo.component';
import { GradientComponent } from './core/components/gradient/gradient.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoComponent,
    GradientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
