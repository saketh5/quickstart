import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div>
    <label>name: </label>
    //1-way data Binding
    <input value ="{{hero.name}}" placeholder="name">
    // 2-way Data Binding 
    //<input [(ngModel)]="hero.name" placeholder="name">

  </div>`

})
export class AppComponent { 
    title =  'My First Angular App';
    hero : Hero = {
        id : 1,
        name : 'Windstorm',

    }
}

export class Hero {
    id : number;
    name : string;

}

