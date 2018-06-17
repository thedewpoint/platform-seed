import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(countryCode?:string) {
    return browser.get(`/?countryCode=${countryCode}`);
  }

  getHeaderText() {
    return element(by.css('test-div h1')).getText();
  }
}
