import { Component, OnInit } from '@angular/core';
import { ModalService } from '@spartacus/storefront';
import { Modal2Component } from '../modal2/modal2.component';

@Component({
  selector: 'app-modal1',
  templateUrl: './modal1.component.html',
  styleUrls: ['./modal1.component.scss']
})
export class Modal1Component implements OnInit {

  constructor(private spaModal: ModalService) { }

  ngOnInit(): void {
  }

  logIt () {
    alert('Modal 1');
  }

  openModal () {
    this.spaModal.open(Modal2Component, {size: 'lg'})
  }

  closeModal() {
    this.spaModal.closeActiveModal();
  }
}
