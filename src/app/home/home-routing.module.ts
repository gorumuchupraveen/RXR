import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponentComponent } from './about-component/about-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';
import { HomePageComponent } from './home-page/home-page.component'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'component1', component: AboutComponentComponent },
  { path: 'component2', component: BlogComponentComponent },
  { path: 'home', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
