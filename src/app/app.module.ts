import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { provideConfig } from '@spartacus/core';
import { AppRoutingModule } from "@spartacus/storefront";
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ComponentsModule } from "./components/components.module";
import { CustomRoutingModule } from "./custom-routing/custom-routing.module";
import { StyleGuideModule } from "./pages/style-guide/style-guide.module";
import { layoutConfig } from './spartacus/features/_custom/layout-default-config';
import { NttModule } from './spartacus/features/_custom/ntt.module';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    SpartacusModule,
    CustomRoutingModule,
    ComponentsModule,
    StyleGuideModule,
    NttModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [
    provideConfig(layoutConfig)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
