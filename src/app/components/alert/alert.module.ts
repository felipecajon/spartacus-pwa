import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert.component';
import { CloseComponent } from './utilities/icons/close/close.component';

@NgModule({
  declarations: [
    AlertComponent,
    CloseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlertComponent,
    CloseComponent
  ]
})

export class AlertModule { }
