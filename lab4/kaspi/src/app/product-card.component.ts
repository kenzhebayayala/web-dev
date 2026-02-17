import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from './product';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input({ required: true }) product!: Product;

  showDescription = false;

  toggleDescription(): void {
    this.showDescription = !this.showDescription;
  }

  open(): void {
    window.open(this.product.link, '_blank');
  }

  share(): void {
    const text = `${this.product.name} - ${this.product.link}`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text);
      alert('Copied to clipboard!');
      return;
    }

    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    alert('Copied to clipboard!');
  }
}
