import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './core/components/sidebar/sidebar.component';
import { LogoComponent } from './core/components/logo/logo.component';
import { GradientComponent } from './core/components/gradient/gradient.component';
import { ClipboardModule } from 'ngx-clipboard';
import { BorderComponent } from './core/components/border/border.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoComponent,
    GradientComponent,
    BorderComponent,
    NotFoundComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ClipboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
