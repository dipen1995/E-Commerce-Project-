import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/app/models/company';
import { Product } from 'src/app/models/product';
import { CompanyService } from 'src/app/services/company.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-detail',
  templateUrl: './products-detail.component.html',
  styleUrls: ['./products-detail.component.css']
})
export class ProductsDetailComponent implements OnInit {

  id: any;
  product: Product = new Product();
  companies: Company[];
  company: Company = new Company();

  constructor(private productService: ProductService,
    private companyService: CompanyService,
    private _route: ActivatedRoute,
    private _location: Location) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.paramMap.get('id');
    this.productService.getProductById(this.id).subscribe(result => {
      this.product = result;
      this.companyService.getCompanyById(this.product.company).subscribe((result) => {
        this.company = result;
      })
    });
  }

  deleteProductById(id: any) {
    console.log(id);
    this.productService.deleteProductById(id).subscribe((result) => {
      console.log('Product Deleted Successfully..')
      this._location.back();
    });
   
  }

  goBack(): void {
    this._location.back();
  }


}
