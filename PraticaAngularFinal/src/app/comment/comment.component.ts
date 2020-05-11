import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../models/comment.model';
import { CommentService } from '../services/comment.service';
import { NgForm } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comment: Comment = {} as Comment;
  commentArray: Comment[] = [] as Comment[];
  comments: any;
  commentsPost: any;
  @Input() idPost: number;

  constructor(private commentService: CommentService) { }

  async ngOnInit(){
    this.comments = await this.commentService.get();
    let comentarios = this.comments as Comment[];
    this.comments = comentarios;
  }

  async getCommentsByPost(){
    this.commentsPost = await this.commentService.getById(this.idPost);
  }

  
}
