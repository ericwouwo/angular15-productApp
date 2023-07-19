import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { EventDriverService } from 'src/app/state/event.driver.service';
import { ActionEvent, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {



  constructor(private eventDrivenService: EventDriverService){
  }


  ngOnInit(): void {
  }

  // @Output() producEventEmitter: EventEmitter<ActionEvent> =  new EventEmitter();

  onGetAllProducts() {
    //this.producEventEmitter.emit({type:ProductActionsTypes.GET_ALL_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_ALL_PRODUCTS})
  }

  onGetSelectedProducts(){
    //this.producEventEmitter.emit({type:ProductActionsTypes.GET_SELECTED_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_SELECTED_PRODUCTS})
  }

  onGetAvailableProducts(){
    //this.producEventEmitter.emit({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.GET_AVAILABLE_PRODUCTS})
  }

  onNewProduct():void{
    //this.producEventEmitter.emit({type:ProductActionsTypes.NEW_PRODUCT});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.NEW_PRODUCT})
  }

  onSearch(dataForm: any){
    //this.producEventEmitter.emit({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm});
    this.eventDrivenService.publishEvent({type:ProductActionsTypes.SEARCH_PRODUCTS,payload:dataForm})
  }

}
