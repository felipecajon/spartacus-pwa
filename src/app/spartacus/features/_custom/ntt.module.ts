import { layoutConfig, OutletPosition, provideOutlet } from '@spartacus/storefront';
import { provideConfig } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { GlobalMessageComponentModule, OutletModule, OutletRefModule, PageLayoutModule, PageSlotModule, SkipLinkModule } from '@spartacus/storefront';
import { HomepageComponent } from './homepage/homepage.component';

@NgModule({
  declarations: [
    MainComponent,
    HomepageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    GlobalMessageComponentModule,
    OutletModule,
    OutletRefModule,
    PageLayoutModule,
    PageSlotModule,
    SkipLinkModule,
  ],
  exports: [
    MainComponent,
    HomepageComponent
  ]
})
export class NttModule { }
