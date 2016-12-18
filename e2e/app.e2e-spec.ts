import { ItvPage } from './app.po';
import { browser, element, by } from 'protractor/globals';


describe('itv App', function() {
  let page: ItvPage;

  beforeEach(() => {
    page = new ItvPage();
  });

  it('should display message saying ITV Test', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ITV Test');
  });

  it('should display form with the correct fields', () => {
    page.navigateTo();
    expect()
    expect(page.getParagraphText()).toEqual('ITV Test');
  });
});
