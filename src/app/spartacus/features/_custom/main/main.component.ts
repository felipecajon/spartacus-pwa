import { Component, ElementRef, OnInit } from '@angular/core';
import { BaseSite, BaseSiteService, RoutingService } from '@spartacus/core';
import { HamburgerMenuService, KeyboardFocusService, StorefrontComponent } from '@spartacus/storefront';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent extends StorefrontComponent {

}
