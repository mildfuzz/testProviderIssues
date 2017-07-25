import { TestProviderFactoryPage } from './app.po';

describe('test-provider-factory App', () => {
  let page: TestProviderFactoryPage;

  beforeEach(() => {
    page = new TestProviderFactoryPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
