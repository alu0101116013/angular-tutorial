import { Component, EventEmitter, Input, Output, input } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterlist: Character[] = [{
    name: 'Trunks',
    power: 10
  }]

  @Output()
  public onDelete:EventEmitter<string> = new EventEmitter();

  onDeleteCharacter(id?:string):void {
    if (!id) return;

    this.onDelete.emit(id);
  }
}
