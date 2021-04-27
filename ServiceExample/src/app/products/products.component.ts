import { Component, OnInit } from "@angular/core";
import { LoggingService } from "../logging.service";
import { LogData } from "../model/LogData";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"],
  providers: [LoggingService]
})
export class ProductsComponent implements OnInit {
  productLogs: LogData[] = [];
  constructor(private logService: LoggingService) {}

  ngOnInit() {}

  logData() {
    this.logService.log({
      component: "ProductsComponent",
      logStatement: "Clicked in ProductsComponent..!! "
    });
  }

  printLog() {
    this.productLogs = this.logService.getLogData();
  }
}
