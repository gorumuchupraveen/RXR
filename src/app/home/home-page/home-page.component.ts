import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  isClick: boolean = true;
  canSave: boolean;
  isUnchanged: boolean;
  isSpecial: boolean;
  currentStyles = {};
  currentItem_name = "";
  currentItem_name1 = "";
  inputForms = {};


  constructor() { }

  ngOnInit(): void {

  }

  onClick() {
    this.isClick = !this.isClick;
    console.log(this.isClick, "Clicked")
  }



  /* . . . */
  setCurrentStyles() {
    // CSS styles: set per current state of component properties
    this.currentStyles = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-weight': !this.isUnchanged ? 'bold' : 'normal',
      'font-size': this.isSpecial ? '24px' : '12px'
    };
    console.log(this.canSave, this.isSpecial, this.isUnchanged, "clicked")
  }

  inputForm() {
    this.inputForms = {
      firstName: '',
      lastName: '',
    }

  }



}
