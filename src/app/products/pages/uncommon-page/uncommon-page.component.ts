import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  //i18n Select
  name: string = 'John';

  gender: 'male' | 'female' = 'male';

  invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };

  changeClient(): void {
    this.name = 'Melisa';
    this.gender = 'female';
  }

  //i18n Plural
  clients: string[] = ['John', 'Peter', 'Mary', 'Lucy'];
  clientsMap = {
    '=0': 'no tenemos ningún cliente esperando',
    '=1': 'tenemos un cliente esperando',
    other: 'tenemos # clientes epserando',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  //keyvalue pipe
  person = {
    name: 'John',
    age: 35,
    address: 'New York',
  };

  noSorting = (a: any, b: any) => {
    return 1;
  };

  //Async pipe
  public myObservableTimer = interval(2000);
}
