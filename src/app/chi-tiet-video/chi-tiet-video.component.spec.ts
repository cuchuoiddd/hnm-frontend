import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietVideoComponent } from './chi-tiet-video.component';

describe('ChiTietVideoComponent', () => {
  let component: ChiTietVideoComponent;
  let fixture: ComponentFixture<ChiTietVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
