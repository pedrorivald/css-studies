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

import {
  FontAwesomeModule,
  FaIconLibrary,
} from '@fortawesome/angular-fontawesome';
import { faCopy as farCopy } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowUp,
  faSlidersH,
  faCheckCircle,
  faPalette,
  faBorderStyle,
  faPlus,
  faMinus
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LogoComponent,
    GradientComponent,
    BorderComponent,
    NotFoundComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ClipboardModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private library: FaIconLibrary) {
    library.addIcons(
      faArrowUp,
      faSlidersH,
      farCopy,
      faCheckCircle,
      faGithub,
      faPalette,
      faBorderStyle,
      faPlus,
      faMinus
    );
  }
}
