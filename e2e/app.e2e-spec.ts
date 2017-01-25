import { CrowdFundingPage } from './app.po';

describe('crowd-funding App', function() {
  let page: CrowdFundingPage;

  beforeEach(() => {
    page = new CrowdFundingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
