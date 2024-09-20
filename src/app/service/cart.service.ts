import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];
  private cartItemsSubject = new BehaviorSubject<any[]>([]);
  private searchSubject = new BehaviorSubject<string>('');

  constructor() { }

  getProducts() {
    return this.cartItemsSubject.asObservable();
  }

  addtoCart(product: any) {
    const itemIndex = this.cartItems.findIndex(item => item.id === product.id);

    if (itemIndex > -1) {
      this.cartItems[itemIndex].quantity++;
      this.cartItems[itemIndex].total = this.cartItems[itemIndex].price * this.cartItems[itemIndex].quantity;
    } else {
      const newItem = { ...product, quantity: 1, total: product.price };
      this.cartItems.push(newItem);
    }

    this.cartItemsSubject.next(this.cartItems);
  }

  removeCartItem(product: any) {
    this.cartItems = this.cartItems.filter(item => item.id !== product.id);
    this.cartItemsSubject.next(this.cartItems);
  }

  removeAllCart() {
    this.cartItems = [];
    this.cartItemsSubject.next(this.cartItems);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.total, 0);
  }

  // Search functionality
  get search() {
    return this.searchSubject.asObservable();
  }

  setSearch(query: string) {
    this.searchSubject.next(query);
  }
}
