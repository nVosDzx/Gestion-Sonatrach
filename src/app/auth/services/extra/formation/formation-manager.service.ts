import { User } from './../../../../data/models/user';
import { formation } from './../../management/models/formation';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class FormationManagerService {
  dataContent : User [] ;
  formationRef:AngularFirestoreCollection<formation >;
  formationinfosRef:AngularFirestoreCollection<User>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.formationRef = this.db.collection('/data').doc('/activités').collection('/formation');
    this.formationinfosRef = this.db.collection('/users');
  }

  create(formation){
    return this.db.collection('/data').doc('/activités').collection('/formation').add({...formation}).then(()=>{
      this.router.navigate(['/formation']);
    })
  }
  getformation():AngularFirestoreCollection<formation>{
    return this.formationRef;
  }
  getinfos():AngularFirestoreCollection<User>{
    return this.formationinfosRef;
  }

  get(key){
    return this.db.collection('/data').doc('/activités').collection('/formation').doc(key).valueChanges();
  }
  update(key , formation){
    return this.db.collection('/data').doc('/activités').collection('/formation').doc(key).update(formation).then(()=>{
     this.router.navigate(['/formation']);
    });

  }
  delete(key){
    return this.db.collection('/data').doc('/activités').collection('/formation').doc(key).delete();
  }
 
}