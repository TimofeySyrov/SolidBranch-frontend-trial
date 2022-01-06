import { Injectable } from '@angular/core';

import dataUsersList from '../../assets/dataUsersList.json';
import IUser from './IUser';
import TUser from './TUser';

@Injectable({ providedIn: 'root' })
export class UserService {
  private users: IUser[] = JSON.parse(JSON.stringify(dataUsersList));

  constructor() {}

  getUsers(): IUser[] {
    return this.users;
  }

  getUser(id: string): IUser {
    const [currentUser] = this.users.filter((user) => {
      return user._id === id;
    });

    return currentUser;
  }

  getAllUsersNumber(): number {
    return this.users.length;
  }

  getTypeUsersNumber(usersType: TUser) {
    const currentUsersList = this.users.filter((user) => {
      return user.type === usersType;
    });

    return currentUsersList.length;
  }
}
