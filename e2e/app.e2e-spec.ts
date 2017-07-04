import { AresPage } from './app.po';

describe('ares App', () => {
  let page: AresPage;

  beforeEach(() => {
    page = new AresPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
