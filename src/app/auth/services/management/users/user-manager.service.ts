import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { User } from 'src/app/data/models/user';
@Injectable({
  providedIn: 'root'
})
export class UserManagerService {
  userRef:AngularFirestoreCollection<User>;
  constructor(private db : AngularFirestore,private router : Router) 
  { 
    this.userRef = this.db.collection('/users');
  }

  getusers():AngularFirestoreCollection<User>{
    return this.userRef;
  }
  get(key){
    return this.db.collection('/users').doc(key).valueChanges();
  }
  update(key , user){
    return this.db.collection('/users').doc(key).update(user).then(()=>{
     this.router.navigate(['/register']);
    });}

  delete(key){
    return this.db.collection('/users').doc(key).delete();
  }
}
