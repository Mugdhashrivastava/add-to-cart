// src/app/share-cart/share-cart.component.ts
import { Component } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-share-cart',
  templateUrl: './share-cart.component.html',
  styleUrls: ['./share-cart.component.scss'] // Make sure this file exists
})
export class ShareCartComponent {
  tokenKey: string = '';
  message: string | null = null;

  constructor(private apiService: ApiService) {}

  shareCart() {
    if (this.tokenKey) {
      this.apiService.shareCart(this.tokenKey).subscribe(
        (response: any) => {
          this.message = 'Cart shared successfully!';
        },
        (error: any) => {
          this.message = 'Failed to share cart. Please check the token key.';
        }
      );
    }
  }
}
