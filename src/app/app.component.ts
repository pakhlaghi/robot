import { LoggerService } from './core/logger.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rob-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'robot simulator';

  constructor(private loggerService: LoggerService) {}

  ngOnInit() {
    this.loggerService.log('app started');
  }
}
