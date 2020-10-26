import { backup } from './../models/backup';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BackupManagerService {
  dataContent : backup [] ;
  backupRef:AngularFirestoreCollection<backup>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.backupRef = this.db.collection('/data').doc('/applications').collection('/application backup et archivage');
    this.backupRef.snapshotChanges()
    .pipe(map(changes=>changes.map(c=>({key : c.payload.doc.id, ...c.payload.doc.data() }))))
    .subscribe(x => {
      this.dataContent =  x ;
    })
  }

  create(backup){
    return this.db.collection('/data').doc('/applications').collection('/application backup et archivage').add({...backup}).then(()=>{
      this.router.navigate(['/backup']);
    })
  }
  getbackup():AngularFirestoreCollection<backup>{
    return this.backupRef;
  }

  get(key){
    return this.db.collection('/data').doc('/applications').collection('/application backup et archivage').doc(key).valueChanges();
  }
  update(key , backup){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(backup.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application backup et archivage').doc(key).update(backup).then(()=>{
     this.router.navigate(['/backup']);
    });
    }
    

  }
  delete(key){
    return this.db.collection('/data').doc('/applications').collection('/application backup et archivage').doc(key).delete();
  }
  exist(backup){
    var x ;
    this.dataContent.forEach(function (value) 
    {  
       if(backup.adresse_ip == value.adresse_ip) { x = 1};      
    })
    if(x == 1 ){
      window.alert('Cette adresse ip existe déjà');
    } else {
      return this.db.collection('/data').doc('/applications').collection('/application backup et archivage').add({...backup}).then(()=>{
        this.router.navigate(['/backup']);
      })
    }
  }

}
