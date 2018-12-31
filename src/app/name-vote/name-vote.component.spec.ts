import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameVoteComponent } from './name-vote.component';

describe('NameVoteComponent', () => {
  let component: NameVoteComponent;
  let fixture: ComponentFixture<NameVoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameVoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameVoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
