import { pvr } from './../../../auth/services/management/models/pvr';
import { PvrManagerService } from './../../../auth/services/management/pvr/pvr-manager.service';

import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-pvr-form',
  templateUrl: './pvr-form.component.html',
  styleUrls: ['./pvr-form.component.css']
})
export class PvrFormComponent implements OnInit {

  idPvr:any={};
  key;
  msgS='Application Plateforme Virtuelle saved successfully.';
  msgU='Application Plateforme Virtuelle updated successfully';
  action='close';
  selectedetat ;
  etats = ['ON','OFF'];
  constructor(private pvrManager : PvrManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.pvrManager.get(this.key).subscribe(data =>{
      this.idPvr = data;
    })
   }

 
  ngOnInit(): void {}

  save(pvr){
    if(this.key)
      { if(this.pvrManager.update(this.key,pvr.value))
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {   
          if (this.pvrManager.exist(pvr.value))

        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }

}
