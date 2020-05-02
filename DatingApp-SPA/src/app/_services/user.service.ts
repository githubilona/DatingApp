import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;

constructor(private htttp: HttpClient) { }

getUsers(): Observable<User[]>{
  return this.htttp.get<User[]>(this.baseUrl + 'users');
}
getUser(id): Observable<User>{
  return this.htttp.get<User>(this.baseUrl + 'users/' + id);
}

}
