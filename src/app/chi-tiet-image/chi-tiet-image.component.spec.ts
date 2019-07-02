import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietImageComponent } from './chi-tiet-image.component';

describe('ChiTietImageComponent', () => {
  let component: ChiTietImageComponent;
  let fixture: ComponentFixture<ChiTietImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
