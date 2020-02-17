import {browser, by, element, ElementFinder, WebElementPromise, ElementArrayFinder} from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/images-search/') as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('uct-root .content span')).getText() as Promise<string>;
  }

  getGalleryElement(): WebElementPromise {
    return element(by.className('album')).getWebElement() as WebElementPromise;
  }

  getSearchInputElement(): ElementFinder {
    return element(by.className('cs-chip-list-input'));
  }

  getElementByClassName(className: string): ElementFinder {
    return element(by.className(className));
  }

  getElementByTag(tagName: string): ElementFinder {
    return element(by.tagName(tagName));
  }

  getElementsByClassName(className: string): ElementArrayFinder {
    return element.all(by.className(className));
  }

  hasClass(elem: any, cls: string): boolean {
    return elem.getAttribute('class').then( (classes: string) => {
      return classes.split(' ').indexOf(cls) !== -1;
    });
  }

  log(arg: any) {
    browser.call(function() {
      console.log(arg);
    });
  }
}
