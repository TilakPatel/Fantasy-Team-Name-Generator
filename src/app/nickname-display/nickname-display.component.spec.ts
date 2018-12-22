import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NicknameDisplayComponent } from './nickname-display.component';

describe('NicknameDisplayComponent', () => {
  let component: NicknameDisplayComponent;
  let fixture: ComponentFixture<NicknameDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NicknameDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NicknameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
