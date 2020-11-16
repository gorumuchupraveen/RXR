import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-component',
  templateUrl: './blog-component.component.html',
  styleUrls: ['./blog-component.component.scss']
})
export class BlogComponentComponent implements OnInit {

  addRows: string = '';
  tableInput = [];

  constructor() { }

  ngOnInit(): void {
  }



  tableData(addRows) {
    this.tableInput.push(this.addRows)
    console.log(this.tableInput)
    console.log(this.addRows, "sdvsfbfdbfd")
  }



}
