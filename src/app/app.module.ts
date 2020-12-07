//Modules
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { AppRoutingModule } from "./app-routing.module";
import { APP_BASE_HREF } from "@angular/common";

// Components
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { ProductAlertsComponent } from "./components/product-alerts/product-alerts.component";
import { ProductDetailsComponent } from "./components/product-details/product-details.component";
import { MessagesComponent } from "./components/messages/messages.component";
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Services
import { InMemoryDataService } from "./services/in-memory-data.service";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    MessagesComponent,
    NavbarComponent,
    DashboardComponent
  ],
  bootstrap: [AppComponent],
  providers: [{provide: APP_BASE_HREF, useValue: ''}]
})
export class AppModule {}
