import { InterventionManagerService } from './../../../../auth/services/extra/intervention/intervention-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationManagerService } from 'src/app/auth/services/extra/formation/formation-manager.service';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-intervention-ag-form',
  templateUrl: './intervention-ag-form.component.html',
  styleUrls: ['./intervention-ag-form.component.css']
})
export class InterventionAgFormComponent implements OnInit, OnDestroy {
  sub : Subscription ;
  idIntervention:any={};
  key;
  msgS='Intervention saved successfully.';
  msgU='Intervention updated successfully';
  action='close';
  selectedpersonne ;
  personneinfos : any = [];
  dataContent : any [];
  constructor(private interventionManager : InterventionManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar, private jf : FormationManagerService) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.interventionManager.getAG(this.key).subscribe(data =>{
      this.idIntervention = data;
    })
   }

 
   ngOnInit(): void {this.getinfosList()}
  getinfosList(){
    var x : any = [];
    this.sub =  this.jf.getinfos().snapshotChanges()
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

  save(intervention){
    if(this.key)
      {
        this.interventionManager.updateAG(this.key,intervention.value);
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {
        this.interventionManager.createAG(intervention.value);
        
        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
