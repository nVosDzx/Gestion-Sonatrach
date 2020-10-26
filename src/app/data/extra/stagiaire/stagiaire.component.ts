import { StagiaireManagerService } from './../../../auth/services/extra/stagiaire/stagiaire-manager.service';
import { stagiaire } from './../../../auth/services/management/models/stagiaire';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit , OnDestroy{

  Stagiaires :stagiaire[];
  filtredStagiaires: any[];
  sub : Subscription ; 
  constructor(private stagiaireManager : StagiaireManagerService) {
   
  }
  ngOnInit(): void {
    this.getstagiaireList();
  }

  getstagiaireList(){
   this.sub =  this.stagiaireManager.getstagiaire().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredStagiaires = this.Stagiaires = data ;
    });
  }


  filter(query){
    this.filtredStagiaires = (query) ? 
      this.Stagiaires.filter(b => b.nom.toLowerCase().includes(query.toLowerCase())) : this.Stagiaires
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer ce stagiaire ! ')) return;
    this.stagiaireManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}


