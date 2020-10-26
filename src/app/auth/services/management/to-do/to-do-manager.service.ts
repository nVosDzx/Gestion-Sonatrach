import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { toDo } from 'src/app/data/models/todo';


@Injectable({
  providedIn: 'root'
})
export class ToDoManagerService {
  ToDoList : AngularFirestoreCollection<toDo>;
  constructor(private db : AngularFirestore, private router : Router) { }
  /* Return the Tasks Collection from FireBase*/
  getTasks()
  {
    return this.ToDoList = this.db.collection('/to-do');
  }

  /* Creat A task with 2 prop , 1-task.value & isCheckced = False */

   creatTask(task)
   {
     return this.db.collection('/to-do')
     .add({...task,isChecked : false})
     .catch(error =>{
       window.alert(error)
     })
   }

   /* Update the task by set in the isCkecked into True */

   updateTask(key , flag){
     if(flag == true){
       return this.db.collection('/to-do').doc(key).update({isChecked : true});
     }
      else { return this.db.collection('/to-do').doc(key).update({isChecked : false}); } 
   }
   

   /*  DELETE A TASK */

   deleteTask(key){
     return this.db.collection('/to-do').doc(key).delete();
   }


  
 


}
