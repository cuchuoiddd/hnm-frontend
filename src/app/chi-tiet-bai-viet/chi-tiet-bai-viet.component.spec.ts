import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietBaiVietComponent } from './chi-tiet-bai-viet.component';

describe('ChiTietBaiVietComponent', () => {
  let component: ChiTietBaiVietComponent;
  let fixture: ComponentFixture<ChiTietBaiVietComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietBaiVietComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietBaiVietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
