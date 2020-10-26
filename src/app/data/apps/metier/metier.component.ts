import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { MetierManagerService } from './../../../auth/services/management/metier/metier-manager.service';
import { metier } from './../../../auth/services/management/models/metier';

@Component({
  selector: 'app-metier',
  templateUrl: './metier.component.html',
  styleUrls: ['./metier.component.css']
})
export class MetierComponent implements OnInit , OnDestroy{

  Metiers :metier[];
  filtredMetiers: any[];
  sub : Subscription ; 
  constructor(private metierManager : MetierManagerService) {
   
  }
  ngOnInit(): void {
    this.getmetierList();
  }

  getmetierList(){
   this.sub =  this.metierManager.getmetier().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredMetiers = this.Metiers = data ;
    });
  }


  filter(query){
    this.filtredMetiers = (query) ? 
      this.Metiers.filter(b => b.type.toLowerCase().includes(query.toLowerCase())) : this.Metiers
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette  Application Metier ! ')) return;
    this.metierManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
