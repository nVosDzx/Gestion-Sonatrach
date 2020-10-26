import { gestion } from './../models/gestion';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GestionManagerService {
  dataContent : gestion [] ;

  gestionRef:AngularFirestoreCollection<gestion>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.gestionRef = this.db.collection('/data').doc('/applications').collection('/application de gestion');
    this.gestionRef.snapshotChanges()
    .pipe(map(changes=>changes.map(c=>({key : c.payload.doc.id, ...c.payload.doc.data() }))))
    .subscribe(x => {
      this.dataContent =  x ;
    })
  }

  create(gestion){
    return this.db.collection('/data').doc('/applications').collection('/application de gestion').add({...gestion}).then(()=>{
      this.router.navigate(['/gestion']);
    });
  }
  getgestion():AngularFirestoreCollection<gestion>{
    return this.gestionRef;
  }

  get(key){
    return this.db.collection('/data').doc('/applications').collection('/application de gestion').doc(key).valueChanges();
  }
  update(key , gestion){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(gestion.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    }
    else {
      return this.db.collection('/data').doc('/applications').collection('/application de gestion').doc(key).update(gestion).then(()=>{
     this.router.navigate(['/gestion']);
    });
    }
  }
  delete(key){
    return this.db.collection('/data').doc('/applications').collection('/application de gestion').doc(key).delete();
  }

  exist(gestion){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(gestion.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application de gestion').add({...gestion}).then(()=>{
        this.router.navigate(['/gestion']);
      });
    }
  }
}
