import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebUnitEditComponent } from './web-unit-edit.component';

describe('WebUnitEditComponent', () => {
  let component: WebUnitEditComponent;
  let fixture: ComponentFixture<WebUnitEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebUnitEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebUnitEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
