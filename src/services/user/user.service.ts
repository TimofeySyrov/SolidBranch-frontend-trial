import { Injectable } from '@angular/core';

import dataUsersList from '../../assets/dataUsersList.json';
import IUser from './IUser';
import IUsersType from './IUsersType';
import TUser from './TUser';

@Injectable({ providedIn: 'root' })
export class UserService {
  private usersJson = JSON.parse(JSON.stringify(dataUsersList));
  private users: IUser[] = this.usersJson.data;

  constructor() {}

  getUsers(): IUser[] {
    return this.usersJson.data;
  }

  getUser(id: string): IUser {
    const [currentUser] = this.users.filter((user) => {
      return user._id === id;
    });

    return currentUser;
  }

  getAllUsersNumber(): number {
    return this.usersJson.total;
  }

  getTypeUsersList(): IUsersType[] {
    const income = this.users.filter(user => user.type === 'income');
    const investment = this.users.filter(user => user.type === 'investment');
    const loan = this.users.filter(user => user.type === 'loan');
    const outcome = this.users.filter(user => user.type === 'outcome');

    return [
      { id: 0, name: 'income', number: income.length },
      { id: 1, name: 'investment', number: investment.length },
      { id: 2, name: 'loan', number: loan.length },
      { id: 3, name: 'outcome', number: outcome.length },
    ];
  }

  getUsersByType(typeName: TUser): IUser[] | null {
    const currentUsersList = this.users.filter((user) => {
      return user.type === typeName;
    });

    const hasUsersByType = currentUsersList.length > 0;

    return hasUsersByType ? currentUsersList : null;
  }
}
