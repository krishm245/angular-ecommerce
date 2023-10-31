import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { OrderService } from '../service/order';
import { GetOrderFailure, GetOrders, GetOrdersSuccess } from './actions';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable()
export class OrderEffects {
  constructor(
    private actions$: Actions,
    private orderService: OrderService,
    private db: AngularFirestore
  ) {}

  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetOrders),
      mergeMap(({ id }) =>
        this.db
          .collection(`orders/${id}/userOrders`)
          .valueChanges()
          .pipe(
            map((orders) => {
              console.log('Orders are called in effect', orders);
              return GetOrdersSuccess({ orders: orders });
            }),
            catchError((error) => {
              console.log('Error when getting orders', error);
              return of(GetOrderFailure({ error }));
            })
          )
      )
    )
  );
}
