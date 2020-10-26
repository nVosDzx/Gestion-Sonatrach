import { TaskService } from './../../services/management/task/task.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private task : TaskService) { }

  ngOnInit(): void {
    
  }

  login(form){
    this.task.login(form.value.email , form.value.password);
  }
}
