import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBank } from '../api-bank';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  async get(){
    await fetch(ApiBank.apiUser)
      .then(response => response.json())
      .then(json => {
        return json as User[];
      })
  }

  async getById(id: number){

  }

  async post(objeto: Comment){

  }
}
