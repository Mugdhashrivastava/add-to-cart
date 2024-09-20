import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal !: number;
  userMessage: string = '';
  
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }
  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }
  increaseQuantity(item: any) {
    item.quantity++;
    item.total = item.price * item.quantity; // Update the total price
    this.updateGrandTotal(); // Call a method to update the grand total
}

decreaseQuantity(item: any) {
    if (item.quantity > 1) {
        item.quantity--;
        item.total = item.price * item.quantity; // Update the total price
        this.updateGrandTotal(); // Call a method to update the grand total
    }
}

updateGrandTotal() {
    this.grandTotal = this.products.reduce((sum: any, item: { total: any; }) => sum + item.total, 0);
}


}
