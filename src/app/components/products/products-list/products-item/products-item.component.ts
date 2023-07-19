import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/model/product.model';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-item',
  templateUrl: './products-item.component.html',
  styleUrls: ['./products-item.component.css']
})
export class ProductsItemComponent {

  @Input() product?: Product
  // @Output() eventEmitter: EventEmitter<ActionEvent> = new EventEmitter();

  constructor(private eventDriverService: EventDriverService){}

  onSelect(product: Product){
    // this.eventEmitter.emit({type:ProductActionsTypes.SELECT_PRODUCT,payload:product});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.SELECT_PRODUCT,payload:product})
  }

  onDelete(product: Product){
    // m
    this.eventDriverService.publishEvent({type:ProductActionsTypes.DELETE_PRODUCT,payload:product})
  }

  onEdit(product: Product){
    // this.eventEmitter.emit({type:ProductActionsTypes.EDIT_PRODUCT,payload:product});
    this.eventDriverService.publishEvent({type:ProductActionsTypes.EDIT_PRODUCT,payload:product})
  }

}
