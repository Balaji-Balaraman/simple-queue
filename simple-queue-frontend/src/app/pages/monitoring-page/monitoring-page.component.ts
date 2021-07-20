import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../../shared/service/ticket.service';
import { Ticket } from '../../shared/model/ticket';

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring-page.component.html',
  styleUrls: ['./monitoring-page.component.scss'],
})
export class MonitoringPage implements OnInit {

  tickets: Ticket[];
  isCollapsed = true;

  constructor(private router: Router,
              private ticketService: TicketService,
              private modalService: BsModalService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.data
      .subscribe(data => this.tickets = data.tickets);
  }

}
