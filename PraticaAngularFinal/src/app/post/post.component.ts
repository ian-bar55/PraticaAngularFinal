import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post = {} as Post;
  posts: Post[] = [] as Post[];

  constructor(private postService: PostService) { }

  ngOnInit(): void {
    
  }

}
