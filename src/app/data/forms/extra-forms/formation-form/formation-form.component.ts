import { infos } from './../../../../auth/services/management/models/infos';
import { FormationManagerService } from './../../../../auth/services/extra/formation/formation-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from 'src/app/data/models/user';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit, OnDestroy {
  sub : Subscription ; 
  idFormation:any={};
  key;
  msgS='Formation saved successfully.';
  msgU='Formation updated successfully';
  action='close';
  selectedpersonne ;
  personneinfos : any = [];
  dataContent : any [];
  constructor(private formationManager : FormationManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.formationManager.get(this.key).subscribe(data =>{
      this.idFormation = data;
    })
   }

 
  ngOnInit(): void {
    this.getinfosList();
  }

  getinfosList(){
    var x : any = [];
    this.sub =  this.formationManager.getinfos().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     
      this.dataContent = data;
      this.dataContent.forEach(function (value) 
      {  
         x.push(value.nom  + ' '  + value.prenom);
      })
      this.personneinfos = x ;
    });

    
  }
  save(formation){
    if(this.key)
      {
        this.formationManager.update(this.key,formation.value);
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {
        this.formationManager.create(formation.value);
        
        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
