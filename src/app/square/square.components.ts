import { Input, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Component } from '@angular/core';

@Component( {
  selector: 'app-square',
  template: `
  <p>
   <button>{{ value }}</button>
    </p>
    `,
    styles:[]
})
export class SquareComponent{

@Input() value: 'X' | 'O';
 // rando = Math.random();

 // constructor() {
  //  setInterval(() => this.rando = Math.random(), 500);
  //}
}