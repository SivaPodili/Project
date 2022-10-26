import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:9090/api/auth";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  signupService(user: { username: string; email: string; password: string;}) {
    return this.http.post(URL+'/signup',user)
  }

  
 signinUser(user:{username:String,password:String}) {
return this.http.post(URL+'/signin',user)
 }


  constructor(private http: HttpClient) { }
}
