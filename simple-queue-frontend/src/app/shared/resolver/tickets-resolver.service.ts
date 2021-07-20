import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';
import { TicketService } from '../service/ticket.service';

@Injectable({
  providedIn: 'root'
})
export class TicketsResolverService implements Resolve<Ticket[]> {

  constructor(private ticketDataService: TicketService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ticket[]> | Promise<Ticket[]> | Ticket[] {
    return this.ticketDataService.getTickets$();
  }
}
