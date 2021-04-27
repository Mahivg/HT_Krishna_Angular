import { Component, OnInit, Input } from "@angular/core";
import { LogData } from "src/app/model/LogData";

@Component({
  selector: "app-print-logs",
  templateUrl: "./print-logs.component.html",
  styleUrls: ["./print-logs.component.scss"]
})
export class PrintLogsComponent implements OnInit {
  @Input() logs: LogData[];

  constructor() {}

  ngOnInit() {}
}
