import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productId:number;
  productFormGroup?: FormGroup;
  submitted:boolean=false;

  constructor(private activatedRoute: ActivatedRoute,
              private productService: ProductsService,
              private fb: FormBuilder){
    this.productId = activatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.productService.getProduct(this.productId).subscribe(product =>{
      this.productFormGroup = this.fb.group({
        id:[product.id, Validators.required],
        name:[product.name, Validators.required],
        price:[product.price, Validators.required],
        quantity:[product.quantity, Validators.required],
        selected:[product.selected, Validators.required],
        available:[product.available, Validators.required],
      })
    })
  }

  onUpdateProduct(): void{
    this.submitted=true;
    if(this.productFormGroup?.invalid) return;
    this.productService.updateProduct(this.productFormGroup?.value).subscribe(data => {
      alert("Update Product Success")
    });
  }

}
