import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../_services/api.service';
import { DataService } from '../_services/data.service';
import { Friend } from '../_models/friend.model';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {
  friends: Friend[] = [];
  constructor(private apiService: ApiService,
              private dataService: DataService) {
  }
  ngOnInit() {
    this.apiService.apiInit();
    this.friends = this.dataService.getUserFriendList();
  }
}
