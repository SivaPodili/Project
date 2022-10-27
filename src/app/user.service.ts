import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:9090/profiletracker/api/auth";
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  signupService(user: { username: string; email: string; password: string; role: string;}) {
    return this.http.post(URL+'/v1/signup',user)
  }

  
 signinUser(user:{username:String,password:String}) {
return this.http.post(URL+'/v1/signin',user)
 }


  constructor(private http: HttpClient) { }
}
