import { metier } from './../../../auth/services/management/models/metier';
import { MetierManagerService } from './../../../auth/services/management/metier/metier-manager.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-metier-form',
  templateUrl: './metier-form.component.html',
  styleUrls: ['./metier-form.component.css']
})
export class MetierFormComponent implements OnInit {

  idMetier:any={};
  key;
  msgS='Application Metier saved successfully.';
  msgU='Application Metier updated successfully';
  action='close';
  selectedetat ;
  etats = ['ON','OFF'];
  constructor(private metierManager : MetierManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.metierManager.get(this.key).subscribe(data =>{
      this.idMetier = data;
    })
   }

 
  ngOnInit(): void {}

  save(metier){
    if(this.key)
      { if(this.metierManager.update(this.key,metier.value))
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {   
          if (this.metierManager.exist(metier.value))

        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
  

}
