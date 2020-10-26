import { FormationManagerService } from './../../../../auth/services/extra/formation/formation-manager.service';
import { ReunionManagerService } from './../../../../auth/services/extra/reuinion/reunion-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-reunion-form',
  templateUrl: './reunion-form.component.html',
  styleUrls: ['./reunion-form.component.css']
})
export class ReunionFormComponent implements OnInit , OnDestroy{
  sub : Subscription ; 
  idReunion:any={};
  key;
  msgS='Reunion saved successfully.';
  msgU='Reunion Metier successfully';
  action='close';
  selectedpersonne ;
  personneinfos : any = [];
  dataContent : any [];
  constructor(private reunionManager : ReunionManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar , private jf : FormationManagerService) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.reunionManager.get(this.key).subscribe(data =>{
      this.idReunion = data;
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
  save(reunion){
    if(this.key)
      {
        this.reunionManager.update(this.key,reunion.value);
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {
        this.reunionManager.create(reunion.value);
        
        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
