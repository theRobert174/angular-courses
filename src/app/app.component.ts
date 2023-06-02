import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(val: number): void {
   this.counter+=val;
  }

  decreaseBy(val: number): void {
    this.counter-=val;
  }

  resetCounter(){
    this.counter = 10;
  }
}
