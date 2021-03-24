import { BorderComponent } from './core/components/border/border.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GradientComponent } from './core/components/gradient/gradient.component';
import { NotFoundComponent } from './core/components/not-found/not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'gradient' },
  { path: 'border', component: BorderComponent },
  { path: 'gradient', component: GradientComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
