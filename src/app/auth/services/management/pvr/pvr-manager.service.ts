import { pvr } from './../models/pvr';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PvrManagerService {
  dataContent : pvr [] ;
  pvrRef:AngularFirestoreCollection<pvr>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.pvrRef = this.db.collection('/data').doc('/applications').collection('/application plateforme virtuelle');
    this.pvrRef.snapshotChanges()
    .pipe(map(changes=>changes.map(c=>({key : c.payload.doc.id, ...c.payload.doc.data() }))))
    .subscribe(x => {
      this.dataContent =  x ;
    })
  }

   getpvr():AngularFirestoreCollection<pvr>{
    return this.pvrRef;
  }

  get(key){
    return this.db.collection('/data').doc('/applications').collection('/application plateforme virtuelle').doc(key).valueChanges();
  }
  update(key , pvr){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(pvr.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application plateforme virtuelle').doc(key).update(pvr).then(()=>{
     this.router.navigate(['/pvr']);
    });
    }
    

  }
  delete(key){
    return this.db.collection('/data').doc('/applications').collection('/application plateforme virtuelle').doc(key).delete();
  }
  exist(pvr){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(pvr.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application plateforme virtuelle').add({...pvr}).then(()=>{
        this.router.navigate(['/pvr']);
      })
    }
  }

}
