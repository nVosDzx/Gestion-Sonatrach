import { User } from './../../../../data/models/user';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  newUser : User ;
  user$ : Observable<firebase.User> ;
  userRef$:AngularFirestoreCollection<User>=null;
  constructor(
    private afAuth : AngularFireAuth,
    private db : AngularFirestore,
    private router : Router,
    private route : ActivatedRoute) {
      this.user$ = this.afAuth.authState;
    }
    //** get state of user  **/
    getUserState(){
      return this.afAuth.authState;
    }
    getUserData():AngularFirestoreCollection<User>{
      return this.userRef$ = this.db.collection('/users');
    }
    /* Login Methode */
    login(email, password){
      let returnUrl = this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      localStorage.setItem('returnUrl' , returnUrl);
      return this.afAuth.signInWithEmailAndPassword(email,password)
        .then(()=>{
        returnUrl = localStorage.getItem('returnUrl');
        this.router.navigateByUrl(returnUrl);
        })
        .catch(error =>{
        window.alert(error.message);
      })
    }

    
      //** calling the logout method of our firebase and navigate user into /login **/
    logout(){
      return this.afAuth.signOut().then(()=>{
        this.router.navigate(['/login']);
      });
    }
 
}
