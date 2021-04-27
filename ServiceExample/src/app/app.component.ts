import { Component } from "@angular/core";
import { LoggingService } from "./logging.service";
import { LogData } from "./model/LogData";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "ServiceExample";
  logs: LogData[] = [];

  constructor(private logService: LoggingService) {}

  logData() {
    this.logService.log({
      component: "AppComponent",
      logStatement: "Clicked in AppComponent..!! ",
    });
  }

  printLog() {
    this.logs = this.logService.getLogData();
  }

  clearInService() {
    this.logService.setLogData([]);
    this.logs = this.logService.getLogData();
  }
}
