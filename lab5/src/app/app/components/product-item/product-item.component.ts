import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css',
})
export class ProductItemComponent {
  @Input() product!: Product;

  // ✅ event аты remove (сенде солай)
  @Output() remove = new EventEmitter<number>();

  selectedImage?: string;

  getMainImage(): string {
    // ✅ алдымен selected, болмаса images[0], болмаса image, болмаса placeholder
    return (
      this.selectedImage ||
      this.product.images?.[0] ||
      this.product.image ||
      'https://via.placeholder.com/140'
    );
  }

  selectImage(img: string) {
    this.selectedImage = img;
  }

  like() {
    this.product.likes++;
  }

  deleteProduct() {
    const ok = confirm('Are you sure you want to delete this product?');
    if (!ok) return;
    this.remove.emit(this.product.id);
  }

  shareWhatsapp() {
    const t = `Check out this product: ${this.product.link}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(t)}`, '_blank');
  }

  shareTelegram() {
    const url = encodeURIComponent(this.product.link);
    const text = encodeURIComponent(this.product.name);
    window.open(`https://t.me/share/url?url=${url}&text=${text}`, '_blank');
  }
}