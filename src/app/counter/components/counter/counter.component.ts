import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `

    <h3> Counter: {{counter}} </h3>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseBy(1)">-1</button>

    `
})

export class CounterComponent {
  constructor() { }

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
