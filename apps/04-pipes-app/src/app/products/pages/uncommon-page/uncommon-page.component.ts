import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = 'Rodrigo';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  };

  changeClient(){
    this.name = 'Melissa';
    this.gender = 'female';
  }

  //i18n Plural
  public clients: string[] = ['Roman', 'Sandra', 'Leia', 'Roger', 'Mariana', 'Samy', 'Fred', 'Francisco'];
  public clientsMap = {
    '=0': ',no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient(){
    this.clients.shift();
  }

  //KeyValue pipe
  public person = {
    name: 'Rodrigo',
    age: 25,
    address: 'Ottawa, Canada'
  }

  //Async pipe
  public myObservableTimer:Observable<number> = interval(2000).pipe(tap(v => console.log('tap:',v) ) );
  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Data in promise');
      console.log('Data in promise');
    }, 3500);
  })
}
