import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavservComponent } from './navserv.component';

describe('NavservComponent', () => {
  let component: NavservComponent;
  let fixture: ComponentFixture<NavservComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavservComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavservComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
