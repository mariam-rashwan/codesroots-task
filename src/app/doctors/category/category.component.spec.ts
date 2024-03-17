import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { Category } from '../../core/interfaces/category';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set item correctly', () => {
    const category: Category =  {
      _id: "659c11de870fb96c7a2c0057",
      name_ar: "طب نفسي",
      name_en: "psychiatry" };
    component.item = category;
    fixture.detectChanges();
    const element = fixture.nativeElement.querySelector('.catNameEn');
    expect(element.textContent).toContain(category.name_en);
  });
});
