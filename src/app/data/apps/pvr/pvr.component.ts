import { pvr } from './../../../auth/services/management/models/pvr';
import { PvrManagerService } from './../../../auth/services/management/pvr/pvr-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-pvr',
  templateUrl: './pvr.component.html',
  styleUrls: ['./pvr.component.css']
})
export class PvrComponent implements OnInit , OnDestroy{

  Pvrs :pvr[];
  filtredPvrs: any[];
  sub : Subscription ; 
  constructor(private pvrManager : PvrManagerService) {
   
  }
  ngOnInit(): void {
    this.getpvrList();
  }

  getpvrList(){
   this.sub =  this.pvrManager.getpvr().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredPvrs = this.Pvrs = data ;
    });
  }


  filter(query){
    this.filtredPvrs = (query) ? 
      this.Pvrs.filter(b => b.type.toLowerCase().includes(query.toLowerCase())) : this.Pvrs
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette  Application de La Plateforme virtuelle !')) return;
    this.pvrManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}