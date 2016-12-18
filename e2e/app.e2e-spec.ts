import { ItvPage } from './app.po';
import { browser, element, by } from 'protractor';


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
    let subheading = element(by.css('h2'));
    expect(subheading).toBeDefined();
    expect(subheading.getText()).toEqual('Register');

    expect(element(by.id('firstname'))).toBeDefined();
    expect(element(by.id('lastname'))).toBeDefined();
    expect(element(by.id('email'))).toBeDefined();
    expect(element(by.id('telephone'))).toBeDefined();
    expect(element(by.id('telephone'))).toBeDefined();
    expect(element(by.id('dob'))).toBeDefined();
    element.all(by.name('newsletter')).then((fields) => {
      expect(fields.length).toEqual(2);
    });
    expect(element(by.css('button[type=submit]'))).toBeDefined();

  });
});
