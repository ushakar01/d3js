import { BrowserModule } from '@angular/platform-browser';
import { NgModule, SecurityContext } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThemeModule } from './theme/theme.module';
import * as cmp from './components';
import { MarkdownModule } from 'ngx-markdown';

import 'prismjs';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/plugins/line-numbers/prism-line-numbers.js';
import 'prismjs/plugins/line-highlight/prism-line-highlight.js';
import { MtlD3Module } from 'projects/mtl/d3/src/lib/d3.module';

const COMPONENTS = [
  cmp.LibIconsComponent,
  cmp.LibAvatarComponent,
  cmp.LibGridComponent,
  cmp.LibDatepickerComponent,
  cmp.LibQuerybuilderComponent,
  cmp.LibPipesComponent,
  cmp.LibDirectivesComponent,
  cmp.LibChartsComponent,
  cmp.LibMultiselectComponent,
  cmp.LibAutocompleteComponent,
  cmp.LibNotificationsComponent,
  cmp.LibD3Component
];
@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENTS
  ],
  imports: [
    BrowserModule,
    ThemeModule.forRoot(),
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE
    }),
    AppRoutingModule,
    MtlD3Module,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
