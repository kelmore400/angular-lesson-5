import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  templateUrl: './unordered-list.component.html',
  styleUrls: ['./unordered-list.component.css']
})
export class UnorderedListComponent implements OnInit {

  constructor() { }

  @Input('items')
  items: any;

  ngOnInit(): void {
  }

}
