import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StyleGuideComponent } from '../pages/style-guide/style-guide.component';

const STATIC_ROUTES: Routes = [
  {path: 'style-guide', component:StyleGuideComponent, data: {pageLabel: 'homepage'}}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(STATIC_ROUTES)
  ]
})
export class CustomRoutingModule { }
