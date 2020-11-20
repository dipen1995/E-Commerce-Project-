import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';

import { AuthModule } from './auth/auth.module';
import { ServicesComponent } from './services/services.component';
import { CompaniesListComponent } from './Admin/companies-list/companies-list.component';
//import { ProductRetrieveComponent } from './product-retrieve/product-retrieve.component';
//import { ProductRetrieveByIdComponent } from './product-retrieve-by-id/product-retrieve-by-id.component';
import { StoreComponent } from './store/store.component';
//import { ProductDeleteComponent } from './product-delete/product-delete.component';
//import { ProductUpdateComponent } from './product-update/product-update.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './Admin/company/company.component';
import { CompanyAddComponent } from './Admin/company-add/company-add.component';
import { CompanyDetailComponent } from './Admin/company-detail/company-detail.component';
import { CompanyEditComponent } from './Admin/company-edit/company-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './Admin/products/products.component';
import { ProductsAddComponent } from './Admin/products-add/products-add.component';
import { ProductsDetailComponent } from './Admin/products-detail/products-detail.component';
import { ProductsEditComponent } from './Admin/products-edit/products-edit.component';
import { CheckoutComponent } from './checkout/checkout.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    ServicesComponent,
    CompaniesListComponent,
   // ProductRetrieveComponent,
    //ProductRetrieveByIdComponent,
    StoreComponent,
    //ProductDeleteComponent,
    //ProductUpdateComponent,
    CartComponent,
    ProductComponent,
    CompanyComponent,
    CompanyAddComponent,
    CompanyDetailComponent,
    CompanyEditComponent,
   
    ProductsComponent,
    ProductsAddComponent,
    ProductsDetailComponent,
    ProductsEditComponent,
    CheckoutComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    ReactiveFormsModule.withConfig({ warnOnNgModelWithFormControl: 'never' }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
