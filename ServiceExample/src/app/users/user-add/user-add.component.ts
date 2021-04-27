import { Component, OnInit } from "@angular/core";
import { LoggingService } from "src/app/logging.service";

@Component({
  selector: "app-user-add",
  templateUrl: "./user-add.component.html",
  styleUrls: ["./user-add.component.scss"]
})
export class UserAddComponent implements OnInit {
  constructor(private logService: LoggingService) {}

  ngOnInit() {}

  logData() {
    this.logService.log({
      component: "UserEditComponent",
      logStatement: "Clicked in UserAddComponent..!! "
    });
  }
}
