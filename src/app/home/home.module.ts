import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

// Custom Directive

import {DefaultThemeDirective} from '../shared/Custom-Directives/default-theme.directive';


@NgModule({
  declarations: [HomePageComponent,DefaultThemeDirective],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
