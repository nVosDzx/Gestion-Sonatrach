import { reunion } from './../../../auth/services/management/models/reunion';
import { ReunionManagerService } from './../../../auth/services/extra/reuinion/reunion-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-reunion',
  templateUrl: './reunion.component.html',
  styleUrls: ['./reunion.component.css']
})
export class ReunionComponent implements OnInit , OnDestroy{

  Reunions :reunion[];
  filtredReunions: any[];
  sub : Subscription ; 
  constructor(private reunionManager : ReunionManagerService) {
   
  }
  ngOnInit(): void {
    this.getreunionList();
  }

  getreunionList(){
   this.sub =  this.reunionManager.getreunion().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredReunions = this.Reunions = data ;
    });
  }


  filter(query){
    this.filtredReunions = (query) ? 
      this.Reunions.filter(b => b.obj.toLowerCase().includes(query.toLowerCase())) : this.Reunions
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette Reunion ! ')) return;
    this.reunionManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
