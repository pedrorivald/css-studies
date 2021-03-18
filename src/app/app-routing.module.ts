import { BorderComponent } from './core/components/border/border.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradientComponent } from './core/components/gradient/gradient.component';

const routes: Routes = [
  { path: 'border', component: BorderComponent },
  { path: 'gradient', component: GradientComponent },
  { path: '', component: GradientComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
