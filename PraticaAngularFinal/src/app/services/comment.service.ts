import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiBank } from '../api-bank';
import { Comment } from '../models/comment.model';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http: HttpClient) { }
  
  async get(){
    console.log('get de comment iniciado')
    let resposta = await this.http.get(ApiBank.apiComments).toPromise();
    console.log('get de comment finalizado ' + resposta)
    return resposta;
  }

  async getById(id: number){
    console.log('Iniciando GetbyId Comment');
    let resposta = await this.http.get(ApiBank.apiComments.concat('?id=').concat(id.toString())).toPromise();
    console.log('GetbyId Comment Finalizado ' + resposta);
    return resposta;
  }

  async getByPostId(postId: number){
    console.log('Iniciando GetbyPostId Comment');
    let resposta = await this.http.get(ApiBank.apiComments.concat('?postId=').concat(postId.toString())).toPromise();
    console.log('GetbyPostId Comment Finalizado ' + resposta);
    return resposta;  
  }

  async post(objeto: Comment){
    console.log('Iniciando Post Comment');
    let resposta = await this.http.post(ApiBank.apiComments, objeto,{observe: 'response'}).toPromise();
    console.log('Post Comment Finalizado ' + resposta);
    return resposta;
  }

  

}
