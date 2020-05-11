import { Component, OnInit } from '@angular/core';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User = {} as User;
  userArray: User[] = [] as User[];
  users: any;

  constructor(private userService: UserService) { }

  async ngOnInit(){
    this.users = await this.userService.get();
    let usuarios = this.users as User[];
    this.users = usuarios;
  }

}
