import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStateInterface } from 'src/app/global-store/appState.interface';
import { ProductInterface } from 'src/app/product/types/product.interface';
import { AddItemToCart, RemoveItemFromCart } from '../store/actions';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor(private store: Store<AppStateInterface>) {}

  addItemToCart(product: ProductInterface) {
    this.store.dispatch(AddItemToCart({ item: product }));
  }

  removeItemFromCart(item: ProductInterface) {
    this.store.dispatch(RemoveItemFromCart({ item }));
  }
}
