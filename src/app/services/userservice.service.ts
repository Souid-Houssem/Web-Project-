import { Injectable } from '@angular/core';


import {  Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
data:any;
id:any;
  constructor(private httpClient: HttpClient) { }

 getAll(){
    return this.httpClient.get(environment.apiUrl+'/users/'  );
  }
 /*ajouteruser(){
    return this.httpClient.post(environment.apiUrl+'/ajout/'  );
  }*/
 getUserById(id: any) {
    return this.httpClient.get(environment.apiUrl+'/users/'+ id);
  }
UpdateUser(id:any, data:any) {
    return this.httpClient.post(environment.apiUrl+'/update/' + id, data );
  }
 DeleteUser() {
    return this.httpClient.delete(environment.apiUrl+'/delete/' );
  }




}



