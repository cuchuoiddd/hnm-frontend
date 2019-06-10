import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentLetfComponent } from './content-letf.component';

describe('ContentLetfComponent', () => {
  let component: ContentLetfComponent;
  let fixture: ComponentFixture<ContentLetfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentLetfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentLetfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
