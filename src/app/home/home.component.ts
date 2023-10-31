import { Component, OnInit } from '@angular/core';
import { AppStateInterface } from '../global-store/appState.interface';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from '../auth/store/selectors';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProductService } from '../product/service/product';
import { ProductInterface } from '../product/types/product.interface';
import { GetProducts } from '../product/store/actions';
import { selectIsLoading, selectProducts } from '../product/store/selectors';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  currentUser$!: Observable<firebase.default.User | null>;
  products$!: Observable<ProductInterface[] | null>;
  isLoading$!: Observable<boolean>;

  constructor(
    private auth: AngularFireAuth,
    private store: Store<AppStateInterface>
  ) {
    this.currentUser$ = this.auth.authState;
    this.products$ = this.store.select(selectProducts);
    this.isLoading$ = this.store.select(selectIsLoading);
  }
}
