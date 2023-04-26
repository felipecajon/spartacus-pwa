import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StyleGuideComponent } from './style-guide.component';
import { ColorsComponent } from './colors/colors.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { TypographyComponent } from './typography/typography.component';
import { GridComponent } from './grid/grid.component';
import { SpacingComponent } from './spacing/spacing.component';
import { ToastersComponent } from './toasters/toasters.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ModalsComponent } from './modals/modals.component';
import { TablesComponent } from './tables/tables.component';
import { PresentationComponent } from './presentation/presentation.component';
import { FormElementsComponent } from './form-elements/form-elements.component';
import { CustomFormModule } from 'src/app/components/form/form.module';
import { Modal1Component } from './modals/modal1/modal1.component';
import { Modal2Component } from './modals/modal2/modal2.component';

@NgModule({
  declarations: [
    StyleGuideComponent,
    AlertsComponent,
    ColorsComponent,
    TypographyComponent,
    GridComponent,
    SpacingComponent,
    ToastersComponent,
    ButtonsComponent,
    ModalsComponent,
    TablesComponent,
    PresentationComponent,
    FormElementsComponent,
    Modal1Component,
    Modal2Component
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    CustomFormModule
  ]
})
export class StyleGuideModule { }
