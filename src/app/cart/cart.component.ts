import { Component, OnInit } from '@angular/core';
import { AppStateInterface } from '../global-store/appState.interface';
import { Store } from '@ngrx/store';
import { ProductInterface } from '../product/types/product.interface';
import {
  selectCartItems,
  selectCartTotal,
  selectIsLoading,
} from './store/selectors';
import { Observable } from 'rxjs';
import { GetCartItems, RemoveItemFromCart } from './store/actions';
import { OrderService } from '../order/service/order';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems$!: Observable<ProductInterface[] | []>;
  isCartLoading$!: Observable<boolean>;
  cartTotal$!: Observable<number>;

  constructor(
    private store: Store<AppStateInterface>,
    private orderService: OrderService
  ) {
    //this.store.dispatch(GetCartItems());
  }

  ngOnInit(): void {
    this.cartItems$ = this.store.select(selectCartItems);
    this.cartTotal$ = this.store.select(selectCartTotal);
    //this.isCartLoading$ = this.store.select(selectIsLoading);
  }
  removeItemFromCart(item: ProductInterface) {
    console.log('Removing item from cart', item);
    this.store.dispatch(RemoveItemFromCart({ item }));
  }
  placeOrder() {
    try {
      this.cartItems$.subscribe((cartItems) => {
        for (let item of cartItems) {
          this.orderService.createOrder('tim@mail.com', item);
        }
      });
    } catch (err) {
      console.log(err);
    }
  }
}

// {
//   id: 1,
//   title: 'New product',
//   category: 'Books',
//   description: 'Description of the book goes here',
//   image: 'imgUrl',
//   price: 30,
//   rating: {
//     rate: 3,
//     count: 800,
//   }
