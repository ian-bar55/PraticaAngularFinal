import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBank } from '../api-bank'

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  
  async get(){
    await fetch(ApiBank.apiComment)
      .then(response => response.json())
      .then(json => {
        return json as Comment[];
      })
  }

  async getById(id: number){
    
  }

  async post(objeto: Comment){

  }

}
