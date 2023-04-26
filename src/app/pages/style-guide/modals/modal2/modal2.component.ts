import { Component, OnInit } from '@angular/core';
import { ModalService } from '@spartacus/storefront';

@Component({
  selector: 'app-modal2',
  templateUrl: './modal2.component.html',
  styleUrls: ['./modal2.component.scss']
})
export class Modal2Component implements OnInit {

  constructor(private modalService: ModalService) { }

  ngOnInit(): void {
  }

  logIt () {
    alert('Modal 2');
  }

  closeModal() {
    this.modalService.closeActiveModal();
  }
}
