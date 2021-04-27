import { Component, OnInit } from "@angular/core";
import { LoggingService } from "src/app/logging.service";

@Component({
  selector: "app-product-edit",
  templateUrl: "./product-edit.component.html",
  styleUrls: ["./product-edit.component.scss"]
})
export class ProductEditComponent implements OnInit {
  constructor(private logService: LoggingService) {}

  ngOnInit() {}

  logData() {
    this.logService.log({
      component: "ProductEditComponent",
      logStatement: "Clicked in ProductEditComponent..!! "
    });
  }
}
