import { stagiaire } from './../../management/models/stagiaire';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class StagiaireManagerService {

  stagiaireRef:AngularFirestoreCollection<stagiaire>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.stagiaireRef = this.db.collection('/data').doc('/activités').collection('/stagiaire');
  }

  create(stagiaire){
    return this.db.collection('/data').doc('/activités').collection('/stagiaire').add({...stagiaire}).then(()=>{
      this.router.navigate(['/stagiaire']);
    })
  }
  getstagiaire():AngularFirestoreCollection<stagiaire>{
    return this.stagiaireRef;
  }

  get(key){
    return this.db.collection('/data').doc('/activités').collection('/stagiaire').doc(key).valueChanges();
  }
  update(key , stagiaire){
    return this.db.collection('/data').doc('/activités').collection('/stagiaire').doc(key).update(stagiaire).then(()=>{
     this.router.navigate(['/stagiaire']);
    });

  }
  delete(key){
    return this.db.collection('/data').doc('/activités').collection('/stagiaire').doc(key).delete();
  }

}
