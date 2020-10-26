import { TaskService } from './../../management/task/task.service';
import { Injectable } from '@angular/core';
import { CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate{

  constructor(private router : Router , private auth : TaskService) { }
  canActivate(route , state : RouterStateSnapshot){
   return this.auth.getUserState().pipe(
     map(user => {
       if(user) return true;
       this.router.navigate(['/login'], {queryParams :{returnUrl : state.url}});
       return false;
     }
   ))
  }
}
