import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class LoggerService {
  public logs: string[] = [];
  constructor() {}
  public log(message: string): void {
    this.logs.push(message);
    console.log(message);
  }

  public clear(): void {
    this.logs = [];
  }
}
