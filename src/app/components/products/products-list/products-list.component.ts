import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/product.model';
import { ActionEvent, AppDataState, DataStateEnum, ProductActionsTypes } from 'src/app/state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent {
  
  @Input() productsInput$:Observable<AppDataState<Product[]>> | null=null;
  @Output() producEventEmitter: EventEmitter<ActionEvent> =  new EventEmitter();
  readonly DataStateEnum = DataStateEnum;

  onSelect(product: Product): void{
    this.producEventEmitter.emit(
      {type:ProductActionsTypes.SELECT_PRODUCT,payload:product}
      );
  }

  onDelete(product: Product): void{
    this.producEventEmitter.emit(
      {type:ProductActionsTypes.DELETE_PRODUCT,payload:product}
      );
   
  }

  onEdit(product: Product): void{
    this.producEventEmitter.emit(
      {type:ProductActionsTypes.EDIT_PRODUCT,payload:product}
      );
  }

  onActionEvent($event: ActionEvent){
    this.producEventEmitter.emit($event);
  }


}
