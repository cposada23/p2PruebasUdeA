import { P1.2Page } from './app.po';

describe('p1.2 App', () => {
  let page: P1.2Page;

  beforeEach(() => {
    page = new P1.2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
