import { ExpAppPage } from './app.po';

describe('exp-app App', () => {
  let page: ExpAppPage;

  beforeEach(() => {
    page = new ExpAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
