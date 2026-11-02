import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '@shared/title/title.component';

@Component({
  selector: 'app-change-detection',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    CommonModule,
    TitleComponent
  ],
  template: `
  <app-title [title]="currrentFramework()"/>

  <pre>{{framworkAsSignal() | json}}</pre>
  <pre>{{freamworkAsProperty | json}}</pre>
  `,
  styles: ``
})
export default class ChangeDetectionComponent {
  public currrentFramework = computed( () => `Change detection - ${this.framworkAsSignal().name}`);

  public framworkAsSignal = signal({
    name: 'Angular',
    realeaseDate: 2016,
  });
  public freamworkAsProperty = {
    name: 'Angular',
    realaseDate: 2016,
  };

  constructor(){
    setTimeout(() => {
      this.freamworkAsProperty.name = 'React';
      this.framworkAsSignal.update( val => ({
        ...val,
        name: 'React'
      }));
      console.log('HECHO', this.freamworkAsProperty.name);
    }, 3000);
  }
}
