import { Component } from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'Iron Man';
  public age:number = 30;

  get CapitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${ this.name } - ${ this.age }`
  }

  changeHero():void {
    this.name = 'Spiderman';
  }

  changeAge():void {
    this.age = 18;
  }

  resetForm():void {
    this.name = 'Iron Man';
    this.age = 30;

    // document.querySelectorAll('h1')!.forEach(element => {
    //   element.innerHTML = '<h1>Desde angular</h1>'
    // })
  }
}
