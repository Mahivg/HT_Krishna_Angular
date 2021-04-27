import { Injectable } from "@angular/core";
import { LogData } from "./model/LogData";

@Injectable({
  providedIn: "root",
})
export class LoggingService {
  logData: LogData[] = [];

  constructor() {}

  log(logObj: LogData) {
    this.logData.push(logObj);
  }

  setLogData(logObj: LogData[]) {
    this.logData = logObj;
  }

  getLogData(): LogData[] {
    return this.logData;
  }
}
