import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';


import { auth} from 'firebase/app';
import { User, AuthOptions, AuthProvider } from './auth.types';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authState$: Observable<firebase.User>

  constructor(private afAuth: AngularFireAuth) {
    this.authState$ = this.afAuth.authState;
    
  }

  get isAuthenticated(): Observable<boolean> {
    return this.authState$.pipe(map(user => user!== null));
  }

  authenticate({ isSignIn, provider, user }: AuthOptions): Promise<auth.UserCredential>{
    let operation: Promise<auth.UserCredential>;

    operation = isSignIn ? this.signInWithEmail(user) : this.signUpWithEmail(user);
    return operation;
  }

  logout(): Promise<void>{
    return this.afAuth.auth.signOut();
  }

  private signInWithEmail({ email, password}: User): Promise<auth.UserCredential>{
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private signUpWithEmail({ email, password, name}: User): Promise<auth.UserCredential>{
    return this.afAuth.auth
    .createUserWithEmailAndPassword(email, password)
    .then(crendentials =>
      crendentials.user.updateProfile({ displayName: name, photoURL: null})
      .then(() => crendentials)
      );
  }

  //Registrar-se
  criarConta(user: User){
    this.afAuth.auth
    .createUserWithEmailAndPassword(user.email, user.password);
    
  }
  logar(user: User){
    return this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password);
  }

}
