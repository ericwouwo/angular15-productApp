import { Component, OnInit } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {Product} from "../../model/product.model";
import {Observable, catchError, map, of, startWith} from "rxjs";
import { AppDataState, DataStateEnum } from 'src/app/state/product.state';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products$:Observable<AppDataState<Product[]>> | null=null;
  readonly DataStateEnum = DataStateEnum;

  constructor(private productsService:ProductsService,
              private router: Router) { }

  ngOnInit(): void {
  }

  onGetAllProducts() {
    this.products$ =
    this.productsService.getAllProducts().pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data:data})}),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetSelectedProducts(){
    this.products$ =
    this.productsService.getSelectedProducts().pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data:data})}),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onGetAvailableProducts(){
    this.products$ =
    this.productsService.getAvailableProducts().pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data:data})}),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSearch(dataForm: any){
    this.products$ =
    this.productsService.searchProducts(dataForm.keyword).pipe(
      map(data => {
        console.log(data);
        return ({dataState: DataStateEnum.LOADED, data:data})}),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err =>of({dataState: DataStateEnum.ERROR, errorMessage:err.message}))
    );
  }

  onSelect(product: Product): void{
    this.productsService.select(product).subscribe(data => product.selected=data.selected);
  }

  onDelete(product: Product): void{
    let v:boolean =confirm("Etes vous sures?")
    if(v)
      this.productsService.deleteProduct(product).subscribe(data => this.onGetAllProducts());
  }

  onEdit(product: Product): void{
    this.router.navigateByUrl(`/editProduct/${product.id}`);
  }

  onNewProduct():void{
    this.router.navigateByUrl("/newProduct");
  }

}
