import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {


  isClick:boolean =true;

  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.isClick = !this.isClick;
    console.log(this.isClick, "Clicked")
  }


}
