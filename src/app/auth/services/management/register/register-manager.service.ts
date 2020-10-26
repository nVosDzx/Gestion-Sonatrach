import { User } from './../../../../data/models/user';
import { Router } from '@angular/router';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class RegisterManagerService {
  userRef:AngularFirestoreCollection<User>;
  newUser : any ;
  constructor(
    private afAuth : AngularFireAuth ,
    private db : AngularFirestore,
    private router : Router) {
      this.userRef = this.db.collection('/users');
     }

  createUser(user){
    this.afAuth.createUserWithEmailAndPassword(user.email , user.password)
    .then( userCredential => {
      this.newUser = user ;
      userCredential.user.updateProfile({
        displayName : user.nom + ' ' + user.prenom 
      });

      this.insertUserData(userCredential).catch(error => {
        window.alert(error.message);
      })
      .then(()=>{
        this.router.navigate(['/register'])
      })
      .catch(error => {
        window.alert(error.message);
      })
    })
  }


  insertUserData (userCredential : firebase.auth.UserCredential){
    return this.db.doc(`users/${userCredential.user.uid}`).set({
      email : this.newUser.email,
      nom : this.newUser.nom,
      prenom : this.newUser.prenom,
      matricule : this.newUser.matricule,
      role : this.newUser.role
    })
  }

  getUserData():AngularFirestoreCollection<User>{
    return this.userRef;
  }
  update(key , user){
    return this.db.collection('/users').doc(key).update(user).then(()=>{
     this.router.navigate(['/register']);
    });}
}
