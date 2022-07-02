import { Component, OnInit, QueryList, ContentChildren, ViewChildren } from '@angular/core';
import { CardBlockComponent } from './card-block/card-block.component';

@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.css']
})

export class CardsContainerComponent implements OnInit {
  constructor() {}

  @ContentChildren(CardBlockComponent) contentChildren: QueryList<CardBlockComponent>;
  @ViewChildren(CardBlockComponent) viewChildren: QueryList<CardBlockComponent>;

  products: Array<any> = [ 
      {id: 1, name: "product 1", price: 110, description: "product1 text description", isShow: false, color: "salmon"}, 
      {id: 2, name: "product 2", price: 120, description: "product2 text description", isShow: false, color: "sandybrown"},
      {id: 3, name: "product 3", price: 130, description: "product3 text description", isShow: false, color: "limegreen"}, 
  ]
  description: number = 0;
  discount: number = 0.15;
  withDiscount: boolean = false;

  

  fHandler(value: number){
    this.products.forEach(product => {
      if(product.id === value) {
        product.isShow = !product.isShow;
      }
    });
  }

  addDiscount() {
    this.withDiscount = !this.withDiscount;
    console.log(this.contentChildren);
  }
  ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.viewChildren.forEach(element => {
      element.changeColor();
    });
  }

}
