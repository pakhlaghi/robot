import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: any;
  let app: any;
  let el: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;
    el = fixture.debugElement.nativeElement;
  }));

  it('should create the app', async(() => {
    expect(app).toBeTruthy();
  }));


  it(`should have as title 'robot simulator'`, async(() => {
    expect(app.title).toEqual('robot simulator');
  }));

  it('should render title in a div tag', async(() => {
    fixture.detectChanges();
    expect(el.querySelector('.title').textContent).toContain('Welcome to robot simulator!!');
  }));
});
