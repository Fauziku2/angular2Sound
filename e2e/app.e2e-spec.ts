import { Angular2SoundPage } from './app.po';

describe('angular2-sound App', () => {
  let page: Angular2SoundPage;

  beforeEach(() => {
    page = new Angular2SoundPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
