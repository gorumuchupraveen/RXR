import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'component1' },
  { path: 'component1', component: AboutComponentComponent },
  { path: 'component2', component: BlogComponentComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
