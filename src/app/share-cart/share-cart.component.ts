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
  title = 'QR Code Generator for Links';

  // Default QR code value (You can set a default link)
  qrCodeLink: string = 'https://localhost:4200.com';

  // Function to generate a new QR code based on the provided link
  updateQRCode(newLink: string) {
    this.qrCodeLink = newLink;
  }
}
