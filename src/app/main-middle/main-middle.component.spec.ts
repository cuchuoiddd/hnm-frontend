import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMiddleComponent } from './main-middle.component';

describe('MainMiddleComponent', () => {
  let component: MainMiddleComponent;
  let fixture: ComponentFixture<MainMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
