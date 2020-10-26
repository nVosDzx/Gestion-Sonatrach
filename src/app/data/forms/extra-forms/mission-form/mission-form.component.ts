import { FormationManagerService } from './../../../../auth/services/extra/formation/formation-manager.service';
import { MissionManagerService } from './../../../../auth/services/extra/mission/mission-manager.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mission-form',
  templateUrl: './mission-form.component.html',
  styleUrls: ['./mission-form.component.css']
})
export class MissionFormComponent implements OnInit {
  sub : Subscription ; 
  idMission:any={};
  key;
  msgS='Mission saved successfully.';
  msgU='Mission updated successfully';
  action='close';
  selectedpersonne ;
  personneinfos : any = [];
  dataContent : any [];
  constructor(private missionManager : MissionManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar , private jf : FormationManagerService) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.missionManager.get(this.key).subscribe(data =>{
      this.idMission = data;
    })
   }

 
  ngOnInit(): void {this.getinfosList()}
  getinfosList(){
    var x : any = [];
    this.sub = this.jf.getinfos().snapshotChanges()
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

  save(mission){
    if(this.key)
      {
        this.missionManager.update(this.key,mission.value);
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {
        this.missionManager.create(mission.value);
        
        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  


}
