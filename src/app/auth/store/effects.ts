import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoginService } from '../services/login';
import {
  UserLoginAttempt,
  UserLoginFailure,
  UserLoginSuccess,
} from './actions';
import { CurrentUserInterface } from '../types/currentUser.interface';
import { switchMap, map, of, catchError, tap } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { deepCopy } from './helperMutation';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions, private loginService: LoginService) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UserLoginAttempt),
      switchMap(({ request }) =>
        this.loginService.loginUser(request).pipe(
          map((userCredential) => {
            console.log('User Success event', userCredential.user);
            const newUser = userCredential?.user;
            return UserLoginSuccess({ currentUser: deepCopy(newUser) });
          }),
          catchError((error) => {
            return of(UserLoginFailure({ error }));
          })
        )
      )
    )
  );

  redirect$ = createEffect(
    (actions$ = inject(Actions), router = inject(Router)) => {
      return actions$.pipe(
        ofType(UserLoginSuccess),
        tap(() => {
          router.navigateByUrl('/');
        })
      );
    },
    {
      functional: true,
      dispatch: false,
    }
  );
}

// export const redirectEffect = createEffect(
//   (actions$ = inject(Actions), router = inject(Router)) => {
//     return actions$.pipe(
//       ofType(UserLoginSuccess),
//       tap(() => {
//         router.navigateByUrl('/');
//       })
//     );
//   },
//   {
//     functional: true,
//     dispatch: false,
//   }
// );

// @Injectable()
// export class UserEffects {
//   constructor(
//     private actions$: Actions,
//     private loginService: LoginService,
//     private afAuth: AngularFireAuth
//   ) {}

//   login$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserLoginAttempt),
//       switchMap(({ request }) => {
//         return this.loginService
//           .loginUser(request)
//           .then((currentUser) => {
//             const user = currentUser.user;
//             return UserLoginSuccess({ currentUser });
//           })
//           .catch((error) => {
//             console.log(error);
//             // Handle the authentication error, dispatch an error action, or perform error handling
//             return UserLoginFailure({ error: 'Error' });
//             //return UserLoginSuccess({ currentUser });
//           });
//       })
//     )
//   );
// }

// @Injectable()
// export class UserEffects {
//   constructor(private actions$: Actions, private loginService: LoginService,private afAuth: AngularFireAuth) {}

//   login$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(UserLoginAttempt),
//       switchMap(({request}) =>
//         this.afAuth.signInWithEmailAndPassword(
//             request.email as string,
//             request.password as string
//         ).pipe(
//           map((currentUser:CurrentUserInterface) => {
//            return UserLoginSuccess({currentUser})
//           }),
//           catchError((error) => {
//             return of(UserLoginFailure({error}))
//           })
//         )
//       )
//     )
//   );
// }

// export const loginEffect = createEffect(
//   (actions$ = inject(Actions), loginService = inject(LoginService)) => {
//     return actions$.pipe(
//       ofType(UserLoginAttempt),
//       switchMap(({ request }) => {
//         return loginService
//           .loginUser(request)
//           .then((currentUser) => {
//             if (currentUser) {
//               return UserLoginFailure({ error: 'Error signing in user' });
//             } else {
//               return UserLoginSuccess({ currentUser: currentUser });
//             }
//           })
//           .catch((error) => {
//             return UserLoginFailure(error);
//           });
//       })
//     );
//   },
//   { functional: true }
// );
