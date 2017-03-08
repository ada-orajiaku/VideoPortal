/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { jqxRatingComponent } from './rating.component';

describe('RatingComponent', () => {
  let component: jqxRatingComponent;
  let fixture: ComponentFixture<jqxRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ jqxRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(jqxRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
