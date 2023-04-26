import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { CloseComponent } from './utilities/icons/close/close.component';



@NgModule({
  declarations: [
    ModalComponent,
    CloseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ModalComponent,
    CloseComponent
  ]
})

export class ModalModule { }
