import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToasterComponent } from './toaster.component';
import { CloseComponent } from './utilities/icons/close/close.component';



@NgModule({
  declarations: [
    ToasterComponent,
    CloseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ToasterComponent,
    CloseComponent
  ]
})

export class ToasterModule { }
