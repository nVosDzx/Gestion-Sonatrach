import { baie } from './../models/baies';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BaieManagerService {
  dataContent : baie [] ;
  baieRef:AngularFirestoreCollection<baie>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.baieRef = this.db.collection('/data').doc('/applications').collection('/application de stockage');
    this.baieRef.snapshotChanges()
    .pipe(map(changes=>changes.map(c=>({key : c.payload.doc.id, ...c.payload.doc.data() }))))
    .subscribe(x => {
      this.dataContent =  x ;
    })
  }

  getbaies():AngularFirestoreCollection<baie>{
    return this.baieRef;
  }

  get(key){
    return this.db.collection('/data').doc('/applications').collection('/application de stockage').doc(key).valueChanges();
  }
  update(key , baie){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(baie.adresse_ip == value.adresse_ip) { x = 1 };      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application de stockage').doc(key).update(baie).then(()=>{
     this.router.navigate(['/baies']);
    });
    }
  }
  delete(key){
    return this.db.collection('/data').doc('/applications').collection('/application de stockage').doc(key).delete();
  }

  exist(baie){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(baie.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application de stockage').add({...baie}).then(()=>{
        this.router.navigate(['/baies']);
      });
    }
  }

}
