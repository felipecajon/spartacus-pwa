import { Component, OnInit } from "@angular/core";
import { ModalService } from "@spartacus/storefront";
import { ModalModel } from "src/app/components/modal/modal.model";
import { Modal1Component } from "./modal1/modal1.component";

@Component({
  selector: "app-modal",
  templateUrl: "./modals.component.html",
  styleUrls: ["./modals.component.scss"],
})

export class ModalsComponent implements OnInit {
  modal1: ModalModel = {
    id: "testeModal-1",
    title: "Modal - 1",
    width: 700,
    isActive: false
  };

  modal2: ModalModel = {
    id: "testeModal-2",
    title: "Modal - 2",
    width: 400,
    isActive: false
  };

  constructor(private modal: ModalService) {}

  ngOnInit(): void {}

  openModal() {
    this.modal.open(Modal1Component, {size: 'lg'})
  }

  toggleModal(modal: ModalModel) {
    modal.isActive = !modal.isActive;
  }

  log(text: string) {
    alert(text);
  }
}
