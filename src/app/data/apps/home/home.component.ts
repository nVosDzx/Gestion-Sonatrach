import { TaskService } from './../../../auth/services/management/task/task.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  sub : Subscription ; 
  sub2 : Subscription ;
  admin : any;
  user : firebase.User;

  constructor(private task : TaskService) { 
    this.sub2 = this.task.getUserState().subscribe(data =>
      {
        this.user = data ;
        console.log(data);
      });
    
  }

  ngOnInit(): void {
    this.get();
  }
  get(){
   this.sub = this.task.getUserData().snapshotChanges()
   .pipe(
     map(changes=>
     changes.map(c=>
       ({key : c.payload.doc.id, ...c.payload.doc.data() })
     )
   )
   ).subscribe(x =>{   });
  }
  logout(){
    this.task.logout();
  }
  ngOnDestroy(){
    this.sub2.unsubscribe();
    this.sub.unsubscribe();
  }
}
