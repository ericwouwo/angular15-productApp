import { Component, EventEmitter, Output } from '@angular/core';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent {

  @Output() producEventEmitter: EventEmitter<ActionEvent> =  new EventEmitter();

  onGetAllProducts() {
    this.producEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
  }

  onGetSelectedProducts(){
    this.producEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
  }

  onGetAvailableProducts(){
    this.producEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
  }

  onNewProduct():void{
    this.producEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});
  }

  onSearch(dataForm: any){
    this.producEventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
  }

}
