import { baie } from './../../../auth/services/management/models/baies';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { BaieManagerService } from 'src/app/auth/services/management/baies/baie-manager.service';

@Component({
  selector: 'app-baie-form',
  templateUrl: './baie-form.component.html',
  styleUrls: ['./baie-form.component.css']
})
export class BaieFormComponent implements OnInit {

  idBaie:any={};
  key;
  msgS='Baie saved successfully.';
  msgU='Baie updated successfully';
  action='close';
  selectedetat ;
  etats = ['ON','OFF'];
  constructor(private baieManager : BaieManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.baieManager.get(this.key).subscribe(data =>{
      this.idBaie = data;
    })
   }

 
  ngOnInit(): void {}

  save(baie){
    if(this.key)
      { if(this.baieManager.update(this.key,baie.value))
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {   
          if (this.baieManager.exist(baie.value))

        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
      
  }
  

}
