import { Component, TemplateRef, ViewChild } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';
import { TicketService } from '../../shared/service/ticket.service';
import { FormBuilder } from '@angular/forms';
import { Ticket } from '../../shared/model/ticket';

@Component({
  selector: 'app-registration',
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.scss'],
})
export class RegistrationPage {

  readonly NORMAL_USER_PRIORITY = 1;
  readonly VIP_VALUE_PRIORITY = 2;
  readonly EMERGENCY_VALUE_PRIORITY = 3;

  @ViewChild('modal', {read: TemplateRef}) modalTemplate: TemplateRef<any>;

  isCollapsed = true;
  modalRef: BsModalRef;
  priority: number = 1;

  checkoutFormGroup = this.formBuilder.group({
    username: [],
    priority: [this.NORMAL_USER_PRIORITY + ''],
    pin: []
  });

  constructor(private router: Router,
              private ticketService: TicketService,
              private modalService: BsModalService,
              private formBuilder: FormBuilder) {
  }

  onPriorityChange(): void {
    const priority = +this.checkoutFormGroup.controls['priority'].value;
    this.isCollapsed = !(priority === this.VIP_VALUE_PRIORITY || priority === this.EMERGENCY_VALUE_PRIORITY);
  }

  saveTicket(): void {
    this.ticketService.saveTicket$(this.checkoutFormGroup.value)
      .subscribe(ticket => this.openModal(ticket));
  }

  private openModal(ticket: Ticket): void {
    const initialState = {
      data: ticket
    };
    this.modalRef = this.modalService.show(this.modalTemplate, {initialState});
  }
}

