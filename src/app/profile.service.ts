import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:9090/api/auth";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  createProfile(profile1: { name: string; associateId: string; mobile: number; email: string; skillSet: string[]; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.post(URL + '/createbook', profile1, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  searchProfileService(profile: { name: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.get(URL+'/searchprofiles'+'?name='+profile.name,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  
  }

  constructor(private http: HttpClient) { }
}
