import { metier } from './../models/metier';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MetierManagerService {
  dataContent : metier [] ;
  metierRef:AngularFirestoreCollection<metier>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.metierRef = this.db.collection('/data').doc('/applications').collection('/application des solution métiers');
    this.metierRef.snapshotChanges()
    .pipe(map(changes=>changes.map(c=>({key : c.payload.doc.id, ...c.payload.doc.data() }))))
    .subscribe(x => {
      this.dataContent =  x ;
    })
  }

  getmetier():AngularFirestoreCollection<metier>{
    return this.metierRef;
  }

  get(key){
    return this.db.collection('/data').doc('/applications').collection('/application des solution métiers').doc(key).valueChanges();
  }
  update(key , metier){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(metier.adresse_ip == value.adresse_ip) { x = 1 };      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application des solution métiers').doc(key).update(metier).then(()=>{
     this.router.navigate(['/metier']);
    });
    }
    

  }
  delete(key){
    return this.db.collection('/data').doc('/applications').collection('/application des solution métiers').doc(key).delete();
  }

  exist(metier){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(metier.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application des solution métiers').add({...metier}).then(()=>{
        this.router.navigate(['/metier']);
      })
    }
  }

}
