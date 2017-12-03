import { RobotAppPage } from './app.po';

describe('robot-app App', () => {
  let page: RobotAppPage;

  beforeEach(() => {
    page = new RobotAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to rob!!');
  });
});
