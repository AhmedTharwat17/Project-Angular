import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { IUsers } from './../Shared Classes and types/interface';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss']
})
export class UsersPageComponent implements OnInit {
  UsersList:IUsers[];
  constructor(private userData:ProductServiceService) { }

  ngOnInit(): void {
    this.userData.getUsers().subscribe(data => {
      this.UsersList = data;
    })
  }

}
