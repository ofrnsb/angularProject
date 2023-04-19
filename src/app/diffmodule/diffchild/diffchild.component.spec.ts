import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiffchildComponent } from './diffchild.component';

describe('DiffchildComponent', () => {
  let component: DiffchildComponent;
  let fixture: ComponentFixture<DiffchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiffchildComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiffchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
