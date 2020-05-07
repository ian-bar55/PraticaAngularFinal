import { Component, OnInit } from '@angular/core';
import { Comment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: Comment = {} as Comment;
  comments: Comment[] = [] as Comment[];

  constructor(private commentService: CommentService) { }

  ngOnInit(){
    
  }
}
