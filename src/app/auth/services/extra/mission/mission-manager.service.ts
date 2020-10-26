import { mission } from './../../management/models/mission';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class MissionManagerService {

  missionRef:AngularFirestoreCollection<mission>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.missionRef = this.db.collection('/data').doc('/activités').collection('/mission');
  }

  create(mission){
    return this.db.collection('/data').doc('/activités').collection('/mission').add({...mission}).then(()=>{
      this.router.navigate(['/mission']);
    })
  }
  getmission():AngularFirestoreCollection<mission>{
    return this.missionRef;
  }

  get(key){
    return this.db.collection('/data').doc('/activités').collection('/mission').doc(key).valueChanges();
  }
  update(key , mission){
    return this.db.collection('/data').doc('/activités').collection('/mission').doc(key).update(mission).then(()=>{
     this.router.navigate(['/mission']);
    });

  }
  delete(key){
    return this.db.collection('/data').doc('/activités').collection('/mission').doc(key).delete();
  }

}