import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { IconsModule } from '../icons/icons.module';

import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component'
import { DatepickerModule } from './datepicker/datepicker.module';

@NgModule({
  declarations: [
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    IconsModule,
    DatepickerModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    ReactiveFormsModule,
    DatepickerModule,
    InputComponent,
    CheckboxComponent,
    RadioComponent,
    SelectComponent
  ]
})

export class CustomFormModule { }
