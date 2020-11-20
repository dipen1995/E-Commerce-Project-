import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Product } from 'src/app/models/product';
import { CompanyService } from 'src/app/services/company.service';
import { ProductService } from 'src/app/services/product.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-products-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css']
})
export class ProductsEditComponent implements OnInit {
  
  id: any;
  product: Product = new Product();
  companies: Company[];
  productForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,
    private productService: ProductService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe(result => {
      this.product = result;
      console.log(this.product);
    });
    this.companyService.getCompanies().subscribe(result => {
      this.companies = result;
      console.log(this.companies)
    })
    this.productForm = this.formBuilder.group({
      code: ['', Validators.required],
      name: ['', Validators.required],
      details: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      company: ['', Validators.required]
    });

  }
  get f() {
    return this.productForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      return;
    } else {
      console.log(this.product)
      this.productService.updateProductById(this.product, this.id).subscribe(result => {
        console.log("Product Updated Successfully.");
        this.router.navigate(["/Product"]);
      }, (err) => { console.log(err) })
    }
  }

  goBack() {
    this.location.back();
  }
}
