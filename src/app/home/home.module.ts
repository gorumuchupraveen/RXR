import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

// Custom Directive

import { DefaultThemeDirective } from '../shared/Custom-Directives/default-theme.directive';
import { AboutComponentComponent } from './about-component/about-component.component';
import { BlogComponentComponent } from './blog-component/blog-component.component';


@NgModule({
  declarations: [HomePageComponent, DefaultThemeDirective, AboutComponentComponent, BlogComponentComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
