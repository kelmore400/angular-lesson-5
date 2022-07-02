import { Component, ElementRef, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card-block',
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {

  nativeElement: HTMLElement;

  constructor(element: ElementRef) {
    this.nativeElement = element.nativeElement;
  }

  @Output('showDesc')
  showDesc: EventEmitter<string> = new EventEmitter();

  showDescription(text: any) {
    this.showDesc.emit(text);
  }

  @Input('product')
  product: any;

  @Input('discount')
  discount: number = 0;

  elementChild: any;
  changeColor() {
    this.elementChild = this.nativeElement.firstChild;
    this.elementChild.setAttribute("style", `background: ${this.product.color}`)
  }

  

  ngOnInit(): void {
  }

}
