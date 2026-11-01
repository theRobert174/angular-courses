import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PriceComponent } from './components/price/price.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'product', component: ProductComponent},
      { path: '**', redirectTo: 'product' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
