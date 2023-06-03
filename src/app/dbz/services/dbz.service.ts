import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  constructor() { }

  public characters: Character[] =[
    {
      name: 'Krillin',
      power: 1000
    },
    {
      name: 'Goku',
      power: 9500
    },
    {
      name: 'Vegetta',
      power: 7500
    }
  ];

  onNewCharacter(character: Character): void{
    this.characters.push(character);
  }

  onDeleteCharacter(index: number):void{
    console.log(index,'Service');
    this.characters.splice(index,1);

  }
}
