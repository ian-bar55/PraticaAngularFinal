import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBank } from '../api-bank'
import { Post } from '../models/post.model'

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  async get(){
    await fetch(ApiBank.apiPost)
      .then(response => response.json())
      .then(json => {
        return json as Post[];
      })
  }

  async getById(id: number){

  }

  async post(objeto: Comment){

  }
}
