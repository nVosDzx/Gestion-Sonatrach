import { calcule } from './../models/calcule';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CalculeManagerService {
  dataContent : calcule [] ;
  calculeRef:AngularFirestoreCollection<calcule>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.calculeRef = this.db.collection('/data').doc('/applications').collection('/application centre de traitement');
    this.calculeRef.snapshotChanges()
    .pipe(map(changes=>changes.map(c=>({key : c.payload.doc.id, ...c.payload.doc.data() }))))
    .subscribe(x => {
      this.dataContent =  x ;
    })
  }

  
  getcalcule():AngularFirestoreCollection<calcule>{
    return this.calculeRef;
  }

  get(key){
    return this.db.collection('/data').doc('/applications').collection('/application centre de traitement').doc(key).valueChanges();
  }
  update(key , calcule){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(calcule.adresse_ip == value.adresse_ip) { x = 1 };      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application centre de traitement').doc(key).update(calcule).then(()=>{
          this.router.navigate(['/centre-de-traitement']);
          });
    }
    

  }
  delete(key){
    return this.db.collection('/data').doc('/applications').collection('/application centre de traitement').doc(key).delete();
  }
  exist(calcule){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(calcule.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application centre de traitement').add({...calcule}).then(()=>{
        this.router.navigate(['/centre-de-traitement']);
      })
    }
  }

}
