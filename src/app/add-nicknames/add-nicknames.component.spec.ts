import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNicknamesComponent } from './add-nicknames.component';

describe('AddNicknamesComponent', () => {
  let component: AddNicknamesComponent;
  let fixture: ComponentFixture<AddNicknamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNicknamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNicknamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
