import { Component, OnInit } from '@angular/core';

import IUser from 'src/services/user/IUser';
import IUsersType from 'src/services/user/IUsersType';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  users: IUser[] = [];
  usersTypeList: IUsersType[] = [];
  allUsersNumber: number = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.getUsers();
    this.getUsersTypeList();
    this.getAllUsersNumber();
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }

  getUsersTypeList(): void {
    this.usersTypeList = this.userService.getTypeUsersList();
  }

  getAllUsersNumber(): void {
    this.allUsersNumber = this.userService.getAllUsersNumber();
  }
}
