import { NgModule } from '@angular/core';
import { MtlD3ForcedirectedComponent } from './components/mtl-d3-forcedirected/mtl-d3-forcedirected.component';
import { CommonModule } from '@angular/common';
import { ClipboardModule } from '@angular/cdk/clipboard'
import { MtlD3TreeMapComponent } from './components/mtl-d3-tree-map/mtl-d3-tree-map.component';
import { MtlD3LoaderComponent } from './components/mtl-d3-loader/mtl-d3-loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TreeFilterComponent } from './components/tree-filter/tree-filter.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { D3SearchComponent } from './components/d3-search/d3-search.component';
import { DragDropModule } from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [MtlD3ForcedirectedComponent, TreeFilterComponent, MtlD3TreeMapComponent, D3SearchComponent, MtlD3LoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    DragDropModule, 
    ClipboardModule
  ],
  exports: [MtlD3ForcedirectedComponent, MtlD3TreeMapComponent, TreeFilterComponent,MtlD3LoaderComponent],
  providers: []
})
export class MtlD3Module { 
}
