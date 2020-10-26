import { UserManagerService } from './../../services/management/users/user-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RegisterManagerService } from '../../services/management/register/register-manager.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  selectedroles = null ;
  roles = ['ADMIN','AS', 'AM', 'AG', 'ABA', 'APV', 'ACT'];
 
   
  idUser:any={};
  key;
  
 

  constructor(private reg : RegisterManagerService , private userManager : UserManagerService , private route : ActivatedRoute) {
      this.key = this.route.snapshot.paramMap.get('id');
    if(this.key) this.userManager.get(this.key).subscribe(data =>{
      this.idUser = data;
    })
     }

  ngOnInit(): void {
  }
  
  save(f){
    if(this.key)
      {
        this.reg.update(this.key,f.value);
      } 
    else 
      {
        this.reg.createUser(f.value);
      } 
  }
}
