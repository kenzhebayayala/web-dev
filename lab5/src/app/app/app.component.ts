import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { Category } from './models/category.model';
import { Product } from './models/product.model';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  categories: Category[] = [];
  selectedCategoryId: number | null = null;
  products: Product[] = [];

  constructor(private service: ProductService) {
    this.categories = this.service.getCategories();
  }

  selectCategory(id: number) {
    this.selectedCategoryId = id;
    this.products = [...this.service.getProductsByCategory(id)];
  }
}