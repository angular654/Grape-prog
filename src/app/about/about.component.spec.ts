import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have <div> with  class "about"', () => {
    const Element: HTMLElement = fixture.nativeElement;
    const div = Element.querySelector('div');
    expect(div.className).toEqual('about');
  });
  it('<img> should have  src "assets/grape.PNG"', () => {
    const Element: HTMLElement = fixture.nativeElement;
    const img = Element.querySelector('img');
    expect(img.src).toEqual('http://localhost:9876/assets/grape.PNG');
  });
  it('<b> should have text content', () => {
    const Element: HTMLElement = fixture.nativeElement;
    const b = Element.querySelector('b');
    expect(b.textContent).toEqual('Чем нас больше, тем мы сильнее.');
  });
});
