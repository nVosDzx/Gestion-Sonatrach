import { gestion } from './../../../auth/services/management/models/gestion';
import { GestionManagerService } from './../../../auth/services/management/gestion/gestion-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.css']
})
export class GestionComponent implements OnInit , OnDestroy{

  Gestions :gestion[];
  filtredGestions: any[];
  sub : Subscription ; 
  constructor(private gestionManager : GestionManagerService) {
   
  }
  ngOnInit(): void {
    this.getgestionList();
  }

  getgestionList(){
   this.sub =  this.gestionManager.getgestion().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredGestions = this.Gestions = data ;
    });
  }


  filter(query){
    this.filtredGestions = (query) ? 
      this.Gestions.filter(b => b.type.toLowerCase().includes(query.toLowerCase())) : this.Gestions
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette  Application de gestion ! ')) return;
    this.gestionManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
