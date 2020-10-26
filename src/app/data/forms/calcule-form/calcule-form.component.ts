import { CalculeManagerService } from './../../../auth/services/management/calcule/calcule-manager.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-calcule-form',
  templateUrl: './calcule-form.component.html',
  styleUrls: ['./calcule-form.component.css']
})
export class CalculeFormComponent implements OnInit {

  idCalcule:any={};
  key;
  msgS='Application Centre de Calcule saved successfully.';
  msgU='Application Centre de Calcule  updated successfully';
  action='close';
  selectedetat ;
  etats = ['ON','OFF'];
  constructor(private calculeManager : CalculeManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.calculeManager.get(this.key).subscribe(data =>{
      this.idCalcule = data;
    })
   }

 
  ngOnInit(): void {}

  save(calcule){
    if(this.key)
      { if(this.calculeManager.update(this.key,calcule.value))
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {   
          if (this.calculeManager.exist(calcule.value))

        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  
}
