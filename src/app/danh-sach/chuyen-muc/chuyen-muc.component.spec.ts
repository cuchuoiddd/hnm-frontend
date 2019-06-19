import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChuyenMucComponent } from './chuyen-muc.component';

describe('ChuyenMucComponent', () => {
  let component: ChuyenMucComponent;
  let fixture: ComponentFixture<ChuyenMucComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChuyenMucComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChuyenMucComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
