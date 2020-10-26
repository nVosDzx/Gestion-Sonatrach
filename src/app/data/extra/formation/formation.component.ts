import { formation } from './../../../auth/services/management/models/formation';
import { FormationManagerService } from './../../../auth/services/extra/formation/formation-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit , OnDestroy{

  Formations :formation[];
  filtredFormations: any[];
  sub : Subscription ; 
  constructor(private formationManager : FormationManagerService) {
   
  }
  ngOnInit(): void {
    this.getformationList();
  }

  getformationList(){
   this.sub =  this.formationManager.getformation().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredFormations = this.Formations = data ;
     
    });
  }


  filter(query){
    this.filtredFormations = (query) ? 
      this.Formations.filter(b => b.obj.toLowerCase().includes(query.toLowerCase())) : this.Formations
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette Formation ! ')) return;
    this.formationManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

