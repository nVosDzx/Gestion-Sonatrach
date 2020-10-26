import { ToDoManagerService } from './../../../auth/services/management/to-do/to-do-manager.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent implements OnInit , OnDestroy {
  tasks : any = [];
  task : any ;
  flagT = true;
  flagF = false;
  sub : Subscription ; 


  constructor(private ToDoManager : ToDoManagerService) {

  }

  ngOnInit(): void {
    this.gettasks();
  }
  
  gettasks(){
    this.ToDoManager.getTasks().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.tasks = data ;
    });
    
  }
  creatTask(x){
  this.ToDoManager.creatTask(x);
  this.task='';
  }
  delete(key){
    this.ToDoManager.deleteTask(key);
  }
  updateT(key){
    this.ToDoManager.updateTask(key , this.flagT);
  }
  updateF(key){
    this.ToDoManager.updateTask(key , this.flagF)
  }
 
  ngOnDestroy(){
    this.sub.unsubscribe();
  }

  

}
