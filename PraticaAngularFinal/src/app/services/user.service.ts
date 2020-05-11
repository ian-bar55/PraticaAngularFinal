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
    console.log('Iniciando get de user')
    let resposta = await this.http.get(ApiBank.apiUsers).toPromise();
    console.log('get de user finalizado ' + resposta)
    return resposta;
  }

  async getById(id: number){
    console.log('iniciando getbyid de user')
    let resposta =  await this.http.get(ApiBank.apiUsers.concat('?id=').concat(id.toString())).toPromise();
    console.log('getbyid de user finalizado ' + resposta)
    return resposta;
  }

  async post(objeto: User){
    console.log('iniciando post de user')
    let resposta = await this.http.post(ApiBank.apiUsers, objeto,{observe: 'response'}).toPromise();
    console.log('post de user finalizado ' + resposta)
    return resposta;
  }
}
