import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotoListComponent } from './toto-list.component';

describe('TotoListComponent', () => {
  let component: TotoListComponent;
  let fixture: ComponentFixture<TotoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TotoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
