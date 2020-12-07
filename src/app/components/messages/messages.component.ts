import { Component, OnInit } from "@angular/core";
import { LoggerService } from "../../services/logger.service";

@Component({
  selector: "app-messages",
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"]
})
export class MessagesComponent implements OnInit {
  constructor(public loggerService: LoggerService) {}
  ngOnInit() {}
}
