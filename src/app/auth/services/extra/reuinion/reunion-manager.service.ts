import { reunion } from './../../management/models/reunion';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ReunionManagerService {

  reunionRef:AngularFirestoreCollection<reunion>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.reunionRef = this.db.collection('/data').doc('/activités').collection('/reunion');
  }

  create(reunion){
    return this.db.collection('/data').doc('/activités').collection('/reunion').add({...reunion}).then(()=>{
      this.router.navigate(['/reunion']);
    })
  }
  getreunion():AngularFirestoreCollection<reunion>{
    return this.reunionRef;
  }

  get(key){
    return this.db.collection('/data').doc('/activités').collection('/reunion').doc(key).valueChanges();
  }
  update(key , reunion){
    return this.db.collection('/data').doc('/activités').collection('/reunion').doc(key).update(reunion).then(()=>{
     this.router.navigate(['/reunion']);
    });

  }
  delete(key){
    return this.db.collection('/data').doc('/activités').collection('/reunion').doc(key).delete();
  }

}

