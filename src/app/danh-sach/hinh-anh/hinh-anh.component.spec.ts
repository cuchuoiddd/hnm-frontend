import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HinhAnhComponent } from './hinh-anh.component';

describe('HinhAnhComponent', () => {
  let component: HinhAnhComponent;
  let fixture: ComponentFixture<HinhAnhComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HinhAnhComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HinhAnhComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
