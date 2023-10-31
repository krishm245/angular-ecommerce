import { Component, Input } from '@angular/core';
import { ProductInterface } from './types/product.interface';
import { Store } from '@ngrx/store';
import { AppStateInterface } from '../global-store/appState.interface';
import { AddItemToCart } from '../cart/store/actions';
import { CartService } from '../cart/service/cart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent {
  @Input() product!: ProductInterface;

  constructor(
    private store: Store<AppStateInterface>,
    private cartService: CartService
  ) {}

  addProductToCart(product: ProductInterface) {
    console.log('You added a product to your cart', product.id);
    this.store.dispatch(AddItemToCart({ item: product }));
  }
}
