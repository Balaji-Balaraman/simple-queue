export class Ticket {

  id: number;
  username: string;
  pin: string;
  priority: number;
  creationDate: string;
  active: boolean;

  constructor(id: number, username: string, pin: string, priority: number, creationDate: string, active: boolean) {
    this.id = id;
    this.username = username;
    this.pin = pin;
    this.priority = priority;
    this.creationDate = creationDate;
    this.active = active;
  }
}
