import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as theme from './components'
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

const COMPONENTS =[
  theme.HeaderComponent,
  theme.SidebarComponent,
  theme.LayoutComponent
]

@NgModule({
  declarations: [...COMPONENTS],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule
  ],
  exports:[
    ...COMPONENTS
  ]
})
export class ThemeModule { 
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
    };
  }
}
