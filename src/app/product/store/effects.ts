import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ProductService } from '../service/product';
import { GetProducts, GetProductsFailure, GetProductsSuccess } from './actions';
import { switchMap, map, of, catchError } from 'rxjs';

@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}
  products$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GetProducts),
      switchMap(() =>
        this.productService.getProducts().pipe(
          map((products) => {
            console.log('Products Fetched', products);
            return GetProductsSuccess({ products });
          }),
          catchError((error) => {
            return of(GetProductsFailure({ error }));
          })
        )
      )
    )
  );
}
