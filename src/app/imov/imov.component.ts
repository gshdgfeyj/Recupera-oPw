import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES, IMOV } from '../mock-heroes';
import { imov } from '../app.imov';
 
@Component({
  selector: 'app-imov',
  templateUrl: './imov.component.html',
  styleUrls: ['./imov.component.css']
})
 
export class imovComponent implements OnInit {
 
  imov = imov;
  selectedimov: imov;
 
  constructor() { }
 
  ngOnInit() {
  }
 
  onSelect(IMOV: imov): void {
    this.selectedimov = IMOV;
  }