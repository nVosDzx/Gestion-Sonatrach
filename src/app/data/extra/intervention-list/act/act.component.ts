import { InterventionManagerService } from './../../../../auth/services/extra/intervention/intervention-manager.service';
import { intervention } from './../../../../auth/services/management/models/intervention';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-act',
  templateUrl: './act.component.html',
  styleUrls: ['./act.component.css']
})
export class ACTComponent implements OnInit , OnDestroy{

  Interventions :intervention[];
  filtredInterventions: any[];
  sub : Subscription ; 
  constructor(private interventionManager : InterventionManagerService) {
   
  }
  ngOnInit(): void {
    this.getinterventionList();
  }

  getinterventionList(){
   this.sub =  this.interventionManager.getinterventionACT().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredInterventions = this.Interventions = data ;
    });
  }


  filter(query){
    this.filtredInterventions = (query) ? 
      this.Interventions.filter(b => b.obj.toLowerCase().includes(query.toLowerCase())) : this.Interventions
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette Intervention ! ')) return;
    this.interventionManager.deleteACT(key);
    
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}



