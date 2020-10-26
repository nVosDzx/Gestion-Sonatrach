import { AdminService } from './../../management/admin/admin.service';
import { map, tap, take } from 'rxjs/operators';
import { CanActivate,Router} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate
{
    constructor(private info : AdminService,private router : Router){}
    canActivate(): Observable<boolean> | Promise<boolean> | boolean 
    {
        return this.info.getisAdmin().pipe(
          take(1),
          map(user => user && user.admin),
          tap(admin =>{
            if(!admin) {
              this.router.navigate(['/']); 
              window.alert('Access denied - You dont have permission.')
              
            }
          })
        )
    
    }
    }
