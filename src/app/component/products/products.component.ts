import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

// Define the structure of your products, including category as string
interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  quantity: number;
  total: number;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList: Product[] = [];
  public filterCategory: Product[] = [];
  searchKey: string = "";
  public products: Product[] = [];
  public grandTotal!: number;
  public categories: string[] = []; // Define as a string array

  constructor(private api: ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    // Explicitly type the API response as Product[]
    this.api.getProduct().subscribe((res: Product[]) => {
      this.productList = res;
      this.filterCategory = res;

      // Extract categories as a string array, using Set to get unique values
      this.categories = [...new Set(this.productList.map((product: Product) => product.category))];

      // Initialize quantity and total for each product
      this.productList.forEach((a: Product) => {
        Object.assign(a, { quantity: 1, total: a.price });
      });

      console.log(this.productList);
    });

    // Listen for search filter
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    });
  }

  addtocart(item: Product) {
    this.cartService.addtoCart(item);
  }

  filter(category: string) {
    this.filterCategory = this.productList
      .filter((a: Product) => {
        if (a.category === category || category === '') {
          return a;
        } 
        return null; // Return something when the condition is not met (null or false)
      });
  }
  

  increaseQuantity(item: Product) {
    item.quantity++;
    item.total = item.price * item.quantity;
    this.updateGrandTotal();
  }

  decreaseQuantity(item: Product) {
    if (item.quantity > 1) {
      item.quantity--;
      item.total = item.price * item.quantity;
      this.updateGrandTotal();
    }
  }

  updateGrandTotal() {
    this.grandTotal = this.products.reduce((sum: number, item: Product) => sum + item.total, 0);
  }
}
