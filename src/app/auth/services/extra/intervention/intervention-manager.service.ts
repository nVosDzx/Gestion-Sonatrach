import { intervention } from './../../management/models/intervention';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class InterventionManagerService {

  interventionRef:AngularFirestoreCollection<intervention>;

  constructor(private db : AngularFirestore,private router : Router) {
    this.interventionRef = this.db.collection('/data').doc('/activités').collection('/intervention');
  }

  createAS(intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Stockage').add({...intervention}).then(()=>{
      this.router.navigate(['//intervention-AS']);
    })
  }
  createAM(intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Solution Métier').add({...intervention}).then(()=>{
      this.router.navigate(['/intervention-AM']);
    })
  }
  createAG(intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Gestion').add({...intervention}).then(()=>{
      this.router.navigate(['/intervention-AG']);
    })
  }
  createABA(intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Backup et Archivage').add({...intervention}).then(()=>{
      this.router.navigate(['/intervention-ABA']);
    })
  }
  createAPV(intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Plateforme Virtuelle').add({...intervention}).then(()=>{
      this.router.navigate(['/intervention-APV']);
    })
  }
  createACT(intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Centre de Traitement').add({...intervention}).then(()=>{
      this.router.navigate(['/intervention-ACT']);
    })
  }

  getinterventionAS():AngularFirestoreCollection<intervention>{
    return this.interventionRef.doc('/Liste des administrations').collection('/Administration de Stockage');
  }
  getinterventionAM():AngularFirestoreCollection<intervention>{
    return this.interventionRef.doc('/Liste des administrations').collection('/Administration de Solution Métier');
  }
  getinterventionAG():AngularFirestoreCollection<intervention>{
    return this.interventionRef.doc('/Liste des administrations').collection('/Administration de Gestion');
  }
  getinterventionABA():AngularFirestoreCollection<intervention>{
    return this.interventionRef.doc('/Liste des administrations').collection('/Administration Backup et Archivage');
  }
  getinterventionAPV():AngularFirestoreCollection<intervention>{
    return this.interventionRef.doc('/Liste des administrations').collection('/Administration Plateforme Virtuelle');
  }
  getinterventionACT():AngularFirestoreCollection<intervention>{
    return this.interventionRef.doc('/Liste des administrations').collection('/Administration Centre de Traitement');
  }

  getAS(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Stockage').doc(key).valueChanges();
  }
  getAM(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Solution Métier').doc(key).valueChanges();
  }
  getAG(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Gestion').doc(key).valueChanges();
  }
  getABA(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Backup et Archivage').doc(key).valueChanges();
  }
  getAPV(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Plateforme Virtuelle').doc(key).valueChanges();
  }
  getACT(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Centre de Traitement').doc(key).valueChanges();
  }

  updateAS(key , intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Stockage').doc(key).update(intervention).then(()=>{
     this.router.navigate(['/intervention-AS']);
    });

  }
  updateAM(key , intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Solution Métier').doc(key).update(intervention).then(()=>{
     this.router.navigate(['/intervention-AM']);
    });

  }
  updateAG(key , intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Gestion').doc(key).update(intervention).then(()=>{
     this.router.navigate(['/intervention-AG']);
    });

  }
  updateABA(key , intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Backup et Archivage').doc(key).update(intervention).then(()=>{
     this.router.navigate(['/intervention-ABA']);
    });

  }
  updateAPV(key , intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Plateforme Virtuelle').doc(key).update(intervention).then(()=>{
     this.router.navigate(['/intervention-APV']);
    });

  }
  updateACT(key , intervention){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Centre de Traitement').doc(key).update(intervention).then(()=>{
     this.router.navigate(['/intervention-ACT']);
    });

  }

  deleteAS(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Stockage').doc(key).delete();
  }
  deleteAM(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Solution Métier').doc(key).delete();
  }
  deleteAG(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration de Gestion').doc(key).delete();
  }
  deleteABA(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Backup et Archivage').doc(key).delete();
  }
  deleteAPV(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Plateforme Virtuelle').doc(key).delete();
  }
  deleteACT(key){
    return this.db.collection('/data').doc('/activités').collection('/intervention').doc('/Liste des administrations').collection('/Administration Centre de Traitement').doc(key).delete();
  }

}