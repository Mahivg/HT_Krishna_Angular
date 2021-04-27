import { Component, OnInit } from "@angular/core";
import { LoggingService } from "src/app/logging.service";

@Component({
  selector: "app-user-edit",
  templateUrl: "./user-edit.component.html",
  styleUrls: ["./user-edit.component.scss"]
})
export class UserEditComponent implements OnInit {
  constructor(private logService: LoggingService) {}

  ngOnInit() {}

  logData() {
    this.logService.log({
      component: "UserEditComponent",
      logStatement: "Clicked in UserEditComponent..!! "
    });
  }
}
