import { calcule } from './../../../auth/services/management/models/calcule';
import { CalculeManagerService } from './../../../auth/services/management/calcule/calcule-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-calcule',
  templateUrl: './calcule.component.html',
  styleUrls: ['./calcule.component.css']
})
export class CalculeComponent implements OnInit , OnDestroy{

  Calcules :calcule[];
  filtredCalcules: any[];
  sub : Subscription ; 
  constructor(private calculeManager : CalculeManagerService) {
   
  }
  ngOnInit(): void {
    this.getcalculeList();
  }

  getcalculeList(){
   this.sub =  this.calculeManager.getcalcule().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredCalcules = this.Calcules = data ;
    });
  }


  filter(query){
    this.filtredCalcules = (query) ? 
      this.Calcules.filter(b => b.type.toLowerCase().includes(query.toLowerCase())) : this.Calcules
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette  Application de Centre de calcule !')) return;
    this.calculeManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}

