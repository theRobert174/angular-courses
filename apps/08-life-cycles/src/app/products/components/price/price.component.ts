import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy{

  @Input() public price: number = 0;
  public interval$? : Subscription;

  constructor(  ) { }

  ngOnInit(): void {
    console.log('Componenete Hijo: ngOnInit');

    this.interval$ = interval(1000).subscribe( v => console.log(`Tick: ${v}`));
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Componenete Hijo: ngOnChanges');
    console.log({changes});
  }

  ngOnDestroy(): void {
    console.log('Componenete Hijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }

}
