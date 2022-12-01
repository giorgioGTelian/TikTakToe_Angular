import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Component } from '@angular/core';

@Component( {
  selector: 'app-square',
  template: `
  <p>
   {{ rando }}
    </p>
    `,
    styles:[]
})
export class SquareComponent{


  rando = Math.random();

  constructor() {
    setInterval(() => this.rando = Math.random(), 500);
  }
}