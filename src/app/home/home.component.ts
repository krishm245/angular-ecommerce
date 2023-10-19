import { Component, OnInit } from '@angular/core';
import { AppStateInterface } from '../global-store/appState.interface';
import { Store, select } from '@ngrx/store';
import { selectCurrentUser } from '../auth/store/selectors';
import { Observable } from 'rxjs';
import { map, skip } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  currentUser$!: Observable<firebase.default.User | null>;

  constructor(
    private auth: AngularFireAuth,
    private store: Store<AppStateInterface>
  ) {
    this.currentUser$ = this.auth.authState;
    this.auth.authState.subscribe((user) =>
      console.log('User on home page', user)
    );
  }

  ngOnInit(): void {}
}
