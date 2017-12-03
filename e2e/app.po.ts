import { browser, by, element } from 'protractor';

export class RobotAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('rob-root h1')).getText();
  }
}
