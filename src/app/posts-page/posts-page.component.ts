import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../Services/product-service.service';
import { IPosts } from './../Shared Classes and types/interface';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.scss']
})
export class PostsPageComponent implements OnInit {
  PostsList:IPosts[];
  constructor(private postData:ProductServiceService) { }
  ngOnInit(): void {
    this.postData.getPosts().subscribe(post => {
      this.PostsList = post;
    })
  }

}
