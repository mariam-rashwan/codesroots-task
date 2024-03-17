import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductsComponent } from './all-products.component';
import { ApolloTestingModule } from 'apollo-angular/testing';

describe('AllProductsComponent', () => {
  let component: AllProductsComponent;
  let fixture: ComponentFixture<AllProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AllProductsComponent],
      imports: [ApolloTestingModule]

    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AllProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
