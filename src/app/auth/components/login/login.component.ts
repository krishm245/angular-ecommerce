import { Component, inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CurrentUserInterface } from '../../types/currentUser.interface';
import { AppStateInterface } from 'src/app/global-store/appState.interface';
import { Store } from '@ngrx/store';
import { UserLoginAttempt } from '../../store/actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private store: Store<AppStateInterface>) {}
  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  onSubmit() {
    this.store.dispatch(
      UserLoginAttempt({
        request: {
          email: this.loginForm.value.email,
          password: this.loginForm.value.password,
        },
      })
    );
  }
}
