import { Component, OnInit } from '@angular/core';
import { AppStateInterface } from '../global-store/appState.interface';
import { Store } from '@ngrx/store';
import { GetOrders, GetOrdersSuccess } from './store/actions';
import { OrderService } from './service/order';
import { Observable } from 'rxjs';
import { GetCartItemsSuccess } from '../cart/store/actions';
import { selectOrders } from './store/selectors';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {
  orders$!: Observable<any>;
  constructor(
    private store: Store<AppStateInterface>,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    console.log('Fecthing orders');
    this.store.dispatch(GetOrders({ id: 'tim@mail.com' }));
    this.orders$ = this.orderService.getOrders('tim@mail.com');
    this.orders$.subscribe((data) => console.log('Orders', data));
    //this.orders$ = this.store.select(selectOrders);
  }
}
