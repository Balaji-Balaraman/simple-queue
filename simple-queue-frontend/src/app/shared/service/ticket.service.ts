import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) {
  }

  saveTicket$(ticket: Ticket): Observable<Ticket> {
    return this.http.post<Ticket>(`${environment.apiUrl}tickets`, ticket);
  }

  getTickets$(): Observable<Ticket[]> {
    const url = `${environment.apiUrl}tickets`;
    return this.http.get<Ticket[]>(url);
  }

}
