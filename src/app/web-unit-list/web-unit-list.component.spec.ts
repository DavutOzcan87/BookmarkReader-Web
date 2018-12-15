import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUnitListComponent } from './web-unit-list.component';

describe('WebUnitListComponent', () => {
  let component: WebUnitListComponent;
  let fixture: ComponentFixture<WebUnitListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebUnitListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebUnitListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
