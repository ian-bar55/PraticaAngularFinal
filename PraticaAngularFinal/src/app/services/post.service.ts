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
    console.log('Iniciando get de post');
    let resposta = await this.http.get(ApiBank.apiPosts).toPromise();
    console.log('Get de post finalizado '+ resposta);
    return resposta;
  }

  async getById(id: number){
    console.log('Iniciando getById de post');
    let resposta =  await this.http.get(ApiBank.apiPosts.concat('?id=').concat(id.toString())).toPromise();
    console.log('GetById de post finalizado ' + resposta);
    return resposta;
  }

  async post(objeto: Post){
    console.log('Iniciando post de post');
    let resposta = await this.http.post(ApiBank.apiPosts, objeto,{observe: 'response'}).toPromise();
    console.log('post de Post finalizado ' + resposta);
    return resposta;
  }
}
