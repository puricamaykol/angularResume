import { AngularResumePage } from './app.po';

describe('angular-resume App', () => {
  let page: AngularResumePage;

  beforeEach(() => {
    page = new AngularResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
