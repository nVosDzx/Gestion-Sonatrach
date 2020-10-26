import { backup } from './../../../auth/services/management/models/backup';
import { BackupManagerService } from './../../../auth/services/management/backup/backup-manager.service';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-backup-form',
  templateUrl: './backup-form.component.html',
  styleUrls: ['./backup-form.component.css']
})
export class BackupFormComponent implements OnInit {

  idBackup:any={};
  key;
  msgS='Application Backup et Archivage saved successfully.';
  msgU='Application Backup et Archivage updated successfully';
  action='close';
  selectedetat ;
  etats = ['ON','OFF'];
  constructor(private backupManager : BackupManagerService,private route : ActivatedRoute,
    private _snackBar: MatSnackBar) {

    this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.backupManager.get(this.key).subscribe(data =>{
      this.idBackup = data;
    })
   }

 
  ngOnInit(): void {}

  save(backup){
    if(this.key)
      { if(this.backupManager.update(this.key,backup.value))
        this._snackBar.open(this.msgU, this.action, {
          duration: 2000       
        });
      } 
    else 
      {   
          if (this.backupManager.exist(backup.value))

        this._snackBar.open(this.msgS, this.action, {
          duration: 2000
        });

      } 
  }
}
