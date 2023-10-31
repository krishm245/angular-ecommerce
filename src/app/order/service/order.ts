import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { OrderInterface } from '../types/order.interface';
import { Observable } from 'rxjs';
import { arrayUnion } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  constructor(private db: AngularFirestore) {}

  getOrders(id: string): Observable<any[]> {
    const orders = this.db.collection(`orders/${id}/userOrders`);
    return orders.valueChanges();
  }

  createOrder(id: string, orderProducts: any) {
    const newOrder = this.db.collection(`orders/${id}/userOrders`);
    newOrder
      .add(orderProducts)
      .then((data) => {
        console.log('Successfully created order', data);
      })
      .catch((error) => {
        console.log('Error adding new order', error);
      });
  }
}
