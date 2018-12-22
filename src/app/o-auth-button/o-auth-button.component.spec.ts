import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OAuthButtonComponent } from './o-auth-button.component';

describe('OAuthButtonComponent', () => {
  let component: OAuthButtonComponent;
  let fixture: ComponentFixture<OAuthButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OAuthButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OAuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
