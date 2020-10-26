import { MissionManagerService } from './../../../auth/services/extra/mission/mission-manager.service';
import { mission } from './../../../auth/services/management/models/mission';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.css']
})
export class MissionComponent implements OnInit , OnDestroy{

  Missions :mission[];
  filtredMissions: any[];
  sub : Subscription ; 
  constructor(private missionManager : MissionManagerService) {
   
  }
  ngOnInit(): void {
    this.getmissionList();
  }

  getmissionList(){
   this.sub =  this.missionManager.getmission().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredMissions= this.Missions = data ;
    });
  }


  filter(query){
    this.filtredMissions = (query) ? 
      this.Missions.filter(b => b.obj.toLowerCase().includes(query.toLowerCase())) : this.Missions
  }
  delete(key){

    if(!confirm('Vous etes sur de supprimer cette Mission ! ')) return;
    this.missionManager.delete(key);
    
  }


  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}


