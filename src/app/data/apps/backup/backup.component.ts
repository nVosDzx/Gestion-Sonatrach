import { backup } from './../../../auth/services/management/models/backup';
import { BackupManagerService } from './../../../auth/services/management/backup/backup-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-backup',
  templateUrl: './backup.component.html',
  styleUrls: ['./backup.component.css']
})
export class BackupComponent implements OnInit , OnDestroy{

  Backups :backup[];
  filtredBackups: any[];
  sub : Subscription ; 
  constructor(private backupManager : BackupManagerService) {
   
  }
  ngOnInit(): void {
    this.getbackupList();
  }

  getbackupList(){
   this.sub =  this.backupManager.getbackup().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredBackups = this.Backups = data ;
    });
  }


  filter(query){
    this.filtredBackups= (query) ? 
      this.Backups.filter(b => b.type.toLowerCase().includes(query.toLowerCase())) : this.Backups
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette  Application de Backup et Archivage ! ')) return;
    this.backupManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}