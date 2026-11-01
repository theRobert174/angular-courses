import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'Rodrigo';
  public nameUpper: string = 'RODRIGO';
  public fullName: string = 'rOdRiGo mArTiNeZ';

  public customDate : Date = new Date();
}
