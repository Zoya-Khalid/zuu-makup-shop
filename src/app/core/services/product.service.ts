import { Injectable } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { IProduct } from '../models/common.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private dbPath = '/products';
  productsRef: AngularFireList<any>;

  constructor(private db: AngularFireDatabase) {
    this.productsRef = db.list(this.dbPath);
  }

  getAllProducts() {
    return this.productsRef;
  }

  getProduct(key: string) {
    return this.db.object(`${this.dbPath}/${key}`);
  }

  addProduct(product: IProduct) {
    this.productsRef.push(product);
  }

  updateProduct(key: string, product: IProduct) {
    this.productsRef.update(key, product);
  }

  deleteProduct(key: string) {
    return this.productsRef.remove(key);
  }
}
