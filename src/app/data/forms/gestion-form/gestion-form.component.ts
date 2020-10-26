import { gestion } from './../../../auth/services/management/models/gestion';
import { GestionManagerService } from './../../../auth/services/management/gestion/gestion-manager.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-gestion-form',
  templateUrl: './gestion-form.component.html',
  styleUrls: ['./gestion-form.component.css']
})
export class GestionFormComponent implements OnInit {

  idGestion:any={};
  key;
  msgS='Application de Gestion saved successfully.';
  msgU='Application de Gestion updated successfully';
  action='close';
  selectedetat ;
  etats = ['ON','OFF'];
  constructor(private gestionManager : GestionManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.gestionManager.get(this.key).subscribe(data =>{
      this.idGestion = data;
    })
   }

 
  ngOnInit(): void {}

  save(gestion){
    if(this.key)
      { if(this.gestionManager.update(this.key,gestion.value))
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {   
          if (this.gestionManager.exist(gestion.value))

        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  

}
