import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListecreditComponent } from './listecredit.component';

describe('ListecreditComponent', () => {
  let component: ListecreditComponent;
  let fixture: ComponentFixture<ListecreditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListecreditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListecreditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
