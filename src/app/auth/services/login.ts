import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { CurrentUserInterface } from '../types/currentUser.interface';
import { LoginRequestInterface } from '../types/loginRequest.interface';
import { Observable, from, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private auth: AngularFireAuth) {}

  logoutUser() {
    try {
      this.auth.signOut();
    } catch (error) {
      console.log('Error signing out');
    }
  }

  loginUser({
    email,
    password,
  }: LoginRequestInterface): Observable<firebase.default.auth.UserCredential> {
    return from(
      this.auth.setPersistence('local').then(() => {
        return this.auth.signInWithEmailAndPassword(
          email as string,
          password as string
        );
      })
    );

    // try {
    //   const userCredentials = await this.auth.signInWithEmailAndPassword(
    //     email as string,
    //     password as string
    //   );
    //   const currentUser: CurrentUserInterface = {
    //     uid: userCredentials.user?.uid,
    //     email: userCredentials.user?.email,
    //     displayName: userCredentials.user?.displayName,
    //     phoneNumber: userCredentials.user?.phoneNumber,
    //     photoUrl: userCredentials.user?.photoURL,
    //   };
    //   console.log('User logged in', currentUser);
    //   return from(currentUser);
    // } catch (error) {
    //   console.log('Error logging user in', error);
    //   return error;
    // }
  }
}
