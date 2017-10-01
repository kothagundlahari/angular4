import { AppartmentsPage } from './app.po';

describe('appartments App', () => {
  let page: AppartmentsPage;

  beforeEach(() => {
    page = new AppartmentsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
