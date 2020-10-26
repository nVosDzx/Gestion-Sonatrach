import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { BaieManagerService } from 'src/app/auth/services/management/baies/baie-manager.service';
import { baie } from 'src/app/auth/services/management/models/baies';

@Component({
  selector: 'app-baie',
  templateUrl: './baie.component.html',
  styleUrls: ['./baie.component.css']
})
export class BaieComponent implements OnInit , OnDestroy {
  baies :baie[];
  filtredBaies: any[];
  sub : Subscription ; 
  
  constructor(private baieManager : BaieManagerService) {
   
  }
  ngOnInit(): void {
    this.getbaiesList();
  }

  getbaiesList(){
   this.sub =  this.baieManager.getbaies().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredBaies = this.baies = data ;
    });
  }


  filter(query){
    this.filtredBaies = (query) ? 
      this.baies.filter(b => b.type.toLowerCase().includes(query.toLowerCase())) : this.baies
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer ce Baie ! ')) return;
    this.baieManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
