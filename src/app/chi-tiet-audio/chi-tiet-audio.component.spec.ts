import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiTietAudioComponent } from './chi-tiet-audio.component';

describe('ChiTietAudioComponent', () => {
  let component: ChiTietAudioComponent;
  let fixture: ComponentFixture<ChiTietAudioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiTietAudioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiTietAudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
