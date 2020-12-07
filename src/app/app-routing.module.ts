import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'products', component: ProductListComponent },
  { path: 'details/:id', component: ProductDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
