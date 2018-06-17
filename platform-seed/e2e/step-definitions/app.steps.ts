
import { AppPage } from "../pages/app.po";
import { Given, Then, When } from 'cucumber';

const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;

let appPage = new AppPage();

Given('I navigate to the homepage on {string}', (string) => {
    // Write code here that turns the phrase above into concrete actions
        return appPage.navigateTo(string);
  });


  When('The page loads',() =>{
    // Write code here that turns the phrase above into concrete actions
  });

  Then('I should see the text {string}', async (string) => {
      const text = await appPage.getHeaderText();
      expect(text).to.equal(string);
  });