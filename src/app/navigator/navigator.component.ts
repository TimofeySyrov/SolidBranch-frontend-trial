import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user/user.service';
import IUser from 'src/services/user/IUser';
import IUsersType from 'src/services/user/IUsersType';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss'],
})
export class NavigatorComponent implements OnInit {
  usersByType: IUser[] | null = null;
  tabsList: IUsersType[] = [];
  activeTabId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.getTabsList();

    this.route.queryParamMap.subscribe((params) => {
      const tabId = params.get('tab');

      if (tabId) {
        this.getUsersByType(tabId);
        this.activeTabId = Number.parseInt(tabId);
      }
    });
  }

  getUsersByType(id: string): void {
    const tabId = Number.parseInt(id);
    const [currentType] = this.tabsList.filter((tab) => tab.id === tabId);
    this.usersByType = this.userService.getUsersByType(currentType.name);

    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    if (this.usersByType) {
      this.usersByType.map((user) => {
        user.amount = getRandomInt(0, 1000);
      });
    }
  }

  getTabsList(): void {
    this.tabsList = this.userService.getTypeUsersList();
  }
}
