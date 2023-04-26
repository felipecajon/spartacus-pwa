import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconsModule } from './icons/icons.module';

import { LoaderComponent } from './loader/loader.component';
import { TableComponent } from './table/table.component';
import { CustomFormModule } from './form/form.module';
import { ToasterModule } from './toaster/toaster.module';
import { ModalModule } from './modal/modal.module';
import { AlertModule } from './alert/alert.module';

@NgModule({
  declarations: [
    LoaderComponent,
    TableComponent
  ],
  imports: [
    CommonModule,
    IconsModule,
    CustomFormModule,
    ToasterModule,
    ModalModule,
    AlertModule
  ],
  exports: [
    IconsModule,
    ToasterModule,
    ModalModule,
    AlertModule,
    LoaderComponent,
    TableComponent
  ]
})

export class ComponentsModule { }
