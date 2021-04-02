import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeforfaitComponent } from './listeforfait.component';

describe('ListeforfaitComponent', () => {
  let component: ListeforfaitComponent;
  let fixture: ComponentFixture<ListeforfaitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeforfaitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeforfaitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
