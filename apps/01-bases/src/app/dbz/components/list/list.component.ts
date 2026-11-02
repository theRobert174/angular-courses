import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      id: 'T3s1',
      name: 'Trunks',
      power: 10
    },
  ];

  onDeleteCharacter(id?: string):void {
    if(!id) return;
    this.onDelete.emit(id);
  }
}
