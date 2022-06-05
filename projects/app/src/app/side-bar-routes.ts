import { Routes } from '@angular/router'
import * as comopnents from './components'
export const routes: Routes = [
   {
        path: "d3",
        data: { title: "D3-charts" },
        component: comopnents.LibD3Component
    }
]