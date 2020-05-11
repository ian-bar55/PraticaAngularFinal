import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.model';
import { PostService } from '../services/post.service';
import { NgForm } from '@angular/forms';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { User } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post = {} as Post;
  posts: any;
  postArray: Post[] = [] as Post[];
  users: any;
  usuario: User = {} as User;

  constructor(private postService: PostService, private userService: UserService) { }

  async ngOnInit(){
    this.posts = await this.postService.get();
    let postagens = this.posts as Post[];
    this.posts = postagens;
    this.users = await this.userService.get();
    let usuarios = this.users as User[];
    this.users = usuarios;
  }

  onSubmit(f: NgForm){
    this.post = f.value;
    this.postService.post(this.post);
  }

  exibicaodeComentarios(id: number){
    this.posts.find(x => x.id === id).exibirComentario = true;
  }
}
