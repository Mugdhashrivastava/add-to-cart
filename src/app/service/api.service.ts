import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getProduct(): Observable<any> {
    // Updated Apple product data with reliable image URLs
    const appleProducts = [
      {
        "id": 1,
        "title": "iPhone 14 Pro Max",
        "price": 1099000.00,
        "description": "6.7-inch Super Retina XDR display, A16 Bionic chip, 48MP camera system.",
        "category": "smartphones",
        "image": "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-card-40-iphone15hero-202309_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086369781",
        "rating": {
          "rate": 4.9,
          "count": 1200
        }
      },
      {
        "id": 2,
        "title": "MacBook Pro 16-inch",
        "price": 239900.00,
        "description": "16.2-inch Retina display, M1 Pro chip, 16-core GPU, 16GB unified memory.",
        "category": "laptops",
        "image": "https://iplanet.one/cdn/shop/files/r1587_Space_Grey_PDP_Image_Position-1__en-IN.jpg?v=1691142733",
        "rating": {
          "rate": 4.8,
          "count": 950
        }
      },
      {
        "id": 3,
        "title": "Apple Watch Series 8",
        "price": 39900.00,
        "description": "45mm case, Always-On Retina display, Blood Oxygen app, ECG app.",
        "category": "wearables",
        "image": "https://www.shutterstock.com/image-photo/bangkokthailandoctober-26-view-new-apple-600nw-2064699041.jpg",
        "rating": {
          "rate": 4.7,
          "count": 890
        }
      },
      {
        "id": 4,
        "title": "AirPods Pro (2nd Generation)",
        "price": 249000.00,
        "description": "Active Noise Cancellation, Transparency mode, Spatial audio, MagSafe charging.",
        "category": "audio",
        "image": "https://cdn.pixabay.com/photo/2021/02/13/03/30/airpods-6010254_640.jpg",
        "rating": {
          "rate": 4.9,
          "count": 1600
        }
      },
      {
        "id": 5,
        "title": "iPhone 15 Pro Max",
        "price": 109900.00,
        "description": "6.7-inch Super Retina XDR display, A16 Bionic chip, 48MP camera system.",
        "category": "smartphones",
        "image": "https://www.maplestore.in/cdn/shop/files/iPhone_15_Pro_Max_Natural_Titanium_PDP_Image_Position-1__en-IN.jpg?v=1701828160&width=1445",
        "rating": {
          "rate": 4.9,
          "count": 1200
        }
      },
      {
        "id": 6,
        "title": "MacBook Pro M2 16-inch",
        "price": 239900.00,
        "description": "16.2-inch Retina display, M1 Pro chip, 16-core GPU, 16GB unified memory.",
        "category": "laptops",
        "image": "https://inventstore.in/staging/wp-content/uploads/2023/05/macbook-pro-13-silver.png",
        "rating": {
          "rate": 4.8,
          "count": 950
        }
      },
      {
        "id": 7,
        "title": "Apple Watch Series 10",
        "price": 399000.00,
        "description": "45mm case, Always-On Retina display, Blood Oxygen app, ECG app.",
        "category": "wearables",
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQarJ52VTe0hMQj3vl6B2KI2NGyx8mPFrzMLw&s",
        "rating": {
          "rate": 4.7,
          "count": 890
        }
      },
      {
        "id": 8,
        "title": "AirPods Pro (3nd Generation)",
        "price": 249000.00,
        "description": "Active Noise Cancellation, Transparency mode, Spatial audio, MagSafe charging.",
        "category": "audio",
        "image": "https://media.croma.com/image/upload/v1685966470/Croma%20Assets/Entertainment/Wireless%20Earbuds/Images/262016_okfsmf.png",
        "rating": {
          "rate": 4.9,
          "count": 1600
        }
      }
    ];
  
    // Return the data as an Observable
    return of(appleProducts).pipe(
      map((res: any) => {
        return res;
      })
    );
  }
  
}
