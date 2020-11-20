
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';

import { AuthGuard } from './auth/auth.guard';
import { ServicesComponent } from './services/services.component';

import { CompaniesListComponent } from './Admin/companies-list/companies-list.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CompanyComponent } from './Admin/company/company.component';
import { CompanyAddComponent } from './Admin/company-add/company-add.component';
import { CompanyDetailComponent } from './Admin/company-detail/company-detail.component';
import { CompanyEditComponent } from './Admin/company-edit/company-edit.component';
import {ProductsComponent} from './Admin/products/products.component';
import {ProductsAddComponent} from './Admin/products-add/products-add.component';
import {ProductsDetailComponent} from './Admin/products-detail/products-detail.component';
import {ProductsEditComponent} from './Admin/products-edit/products-edit.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'services', component: ServicesComponent, canActivate: [AuthGuard] },
  { path: 'companies-list', component: CompaniesListComponent, canActivate: [AuthGuard] },
  { path: 'cart', component: CartComponent  },
  { path: 'products', component: ProductComponent },

  { path: 'companies', component: CompanyComponent , canActivate: [AuthGuard] },
  { path: 'company-add', component: CompanyAddComponent, canActivate: [AuthGuard]  },
  { path: 'company-detail/:id', component: CompanyDetailComponent, canActivate: [AuthGuard]  },
  { path: 'company-edit/:id', component: CompanyEditComponent, canActivate: [AuthGuard]  },

  {path:'Product', component:ProductsComponent},
  {path: 'Product-add', component:ProductsAddComponent},
  { path: 'Product-detail/:id', component: ProductsDetailComponent },
  { path: 'Product-edit/:id', component: ProductsEditComponent },
  
  {path: 'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
