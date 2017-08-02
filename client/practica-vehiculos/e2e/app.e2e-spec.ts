import { PracticaVehiculosPage } from './app.po';

describe('practica-vehiculos App', () => {
  let page: PracticaVehiculosPage;

  beforeEach(() => {
    page = new PracticaVehiculosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
