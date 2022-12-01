import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Component, OnInit } from '@angular/core';

@Component( {
  selector: 'app-square',
  template: `
  <p>
    square works!
    </p>
    `,
    styles:[]
})
export class SquareComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    
  }
}