import { User } from './../../../../data/models/user';
import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  userRef$:AngularFirestoreCollection<User>=null;
  admin$ : Observable<User>;
  constructor(private db : AngularFirestore,private afAuth: AngularFireAuth) { }
  getUserData():AngularFirestoreCollection<User>{
    return this.userRef$ = this.db.collection('/users');
  }
  getisAdmin(){
    return this.admin$ = this.afAuth.authState
    .pipe(switchMap(user_ =>{
      if(user_){
        return this.db.doc(`users/${user_.uid}`).valueChanges();
      } else { return of (null)};
    }))
  }
}
