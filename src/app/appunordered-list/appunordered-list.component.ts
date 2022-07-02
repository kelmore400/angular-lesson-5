import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appunordered-list',
  templateUrl: './appunordered-list.component.html',
  styleUrls: ['./appunordered-list.component.css']
})
export class AppunorderedListComponent implements OnInit {

  constructor() { }

  items: Array<any> = [
    "product1 text description salmon", 
    "product2 text description sandybrown",
    "product3 text description limegreen", 
]

  ngOnInit(): void {
  }

}
