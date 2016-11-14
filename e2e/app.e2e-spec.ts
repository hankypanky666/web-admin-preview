import { WebAdminPreviewPage } from './app.po';

describe('web-admin-preview App', function() {
  let page: WebAdminPreviewPage;

  beforeEach(() => {
    page = new WebAdminPreviewPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
