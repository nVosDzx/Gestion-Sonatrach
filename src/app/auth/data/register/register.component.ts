import { UserManagerService } from './../../services/management/users/user-manager.service';
import { User } from './../../../data/models/user';
import { RegisterManagerService } from './../../services/management/register/register-manager.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit , OnDestroy{
  users :User[];
  filtredusers: any[];
  sub : Subscription ; 

  constructor(private userManager : UserManagerService) { }

  ngOnInit(): void {
    this.getusersinfos();
  }

  getusersinfos(){
    this.sub =  this.userManager.getusers().snapshotChanges()
    .pipe(
      map(changes=>
      changes.map(c=>
        ({key : c.payload.doc.id, ...c.payload.doc.data() })
      )
    )
    ).subscribe(data =>{
     this.filtredusers = this.users = data ;
    });
  }

  filter(query){
    this.filtredusers = (query) ? 
      this.users.filter(b => b.nom.toLowerCase().includes(query.toLowerCase())) : this.users
  }

  delete(key){
    if(!confirm('Vous etes sur de supprimer ce utilisateur ! ')) return;
    this.userManager.delete(key);
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}
