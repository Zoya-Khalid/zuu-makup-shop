import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { IProduct } from '../core/models/common.model';
import { ProductService } from '../core/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-makeupproducts',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './makeupproducts.component.html',
  styleUrl: './makeupproducts.component.scss',
})
export class MakeupproductsComponent implements OnInit {
  products: IProduct[] = [];
  totalProducts = 0;
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService
      .getAllProducts()
      .snapshotChanges()
      .subscribe({
        next: (data) => {
          this.products = [];

          data.forEach((item) => {
            let product = item.payload.toJSON() as IProduct;
            this.totalProducts++;

            this.products.push({
              key: item.key || '',
              id: product.id,
              name: product.name,
              description: product.description,
            });
          });
        },
      });
  }

  editProduct(key: string) {
    this.router.navigate(['/addmakeup/' + key]);
  }

  removeProduct(key: string) {
    if (window.confirm('Are You Sure ??')) {
      this.productService.deleteProduct(key);
    }
  }
}
