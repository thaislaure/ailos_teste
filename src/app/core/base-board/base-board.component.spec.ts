import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseboardComponent } from './base-board.component';

describe('BaseboardComponent', () => {
  let component: BaseboardComponent;
  let fixture: ComponentFixture<BaseboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
