import { AppComponent } from './app.component';
describe('AppComponent', () => {
  let app: AppComponent
  beforeEach(() => {
    app  = {
      title: 'Grape-prog'
    }
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Grape-prog'`, () => {
    expect(app.title).toBe('Grape-prog');
  });
});
