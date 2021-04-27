import { Component, OnInit } from "@angular/core";
import { LoggingService } from "../logging.service";
import { LogData } from "../model/LogData";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"],
})
export class UsersComponent implements OnInit {
  userLogs: LogData[] = [];

  constructor(private logService: LoggingService) {}

  ngOnInit() {}

  logData() {
    this.logService.log({
      component: "UsersComponent",
      logStatement: "Clicked in UsersComponent..!! ",
    });
  }

  printLog() {
    this.userLogs = this.logService.getLogData();
  }
}
