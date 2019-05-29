import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasItemComponent } from './areas-item.component';

describe('AreasItemComponent', () => {
  let component: AreasItemComponent;
  let fixture: ComponentFixture<AreasItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AreasItemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AreasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
