import { Component, OnInit } from "@angular/core";
import { LoggingService } from "src/app/logging.service";

@Component({
  selector: "app-product-add",
  templateUrl: "./product-add.component.html",
  styleUrls: ["./product-add.component.scss"]
})
export class ProductAddComponent implements OnInit {
  constructor(private logService: LoggingService) {}

  ngOnInit() {}

  logData() {
    this.logService.log({
      component: "ProductAddComponent",
      logStatement: "Clicked in ProductAddComponent..!! "
    });
  }
}
