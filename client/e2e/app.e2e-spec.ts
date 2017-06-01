import { KayaPage } from './app.po';

describe('kaya App', function() {
  let page: KayaPage;

  beforeEach(() => {
    page = new KayaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
