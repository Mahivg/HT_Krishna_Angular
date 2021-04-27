import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ProductsComponent } from "./products/products.component";
import { ProductAddComponent } from "./products/product-add/product-add.component";
import { ProductEditComponent } from "./products/product-edit/product-edit.component";
import { UsersComponent } from "./users/users.component";
import { UserAddComponent } from "./users/user-add/user-add.component";
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { LoggingService } from "./logging.service";
import { PrintLogsComponent } from "./shared/print-logs/print-logs.component";

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    UsersComponent,
    UserAddComponent,
    UserEditComponent,
    PrintLogsComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
