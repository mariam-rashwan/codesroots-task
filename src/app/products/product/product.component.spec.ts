import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { TruncatePipe } from '../../core/pipes/truncate.pipe';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProductComponent,TruncatePipe]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;

    // fixture.detectChanges();
  });

  it('product should create', () => {
    expect(component).toBeTruthy();
  });
});
