import { FormationManagerService } from './../../../../auth/services/extra/formation/formation-manager.service';
import { StagiaireManagerService } from './../../../../auth/services/extra/stagiaire/stagiaire-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-stagiaire-form',
  templateUrl: './stagiaire-form.component.html',
  styleUrls: ['./stagiaire-form.component.css']
})
export class StagiaireFormComponent implements OnInit, OnDestroy {
  sub : Subscription ; 
  idStagiaire:any={};
  key;
  msgS='Stagiaire saved successfully.';
  msgU='Stagiaire updated successfully';
  action='close';
  selectedpersonne ;
  personneinfos : any = [];
  dataContent : any [];
  constructor(private stagiaireManager : StagiaireManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar , private jf : FormationManagerService) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.stagiaireManager.get(this.key).subscribe(data =>{
      this.idStagiaire = data;
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

  save(stagiaire){
    if(this.key)
      {
        this.stagiaireManager.update(this.key,stagiaire.value);
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {
        this.stagiaireManager.create(stagiaire.value);
        
        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
