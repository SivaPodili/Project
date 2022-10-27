import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL="http://localhost:9090/profiletracker/api/auth";
@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  
  createProfile(profile: { associateName: string; associateId: string; mobile: string; email: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.post(URL + '/v1/createprofile', profile, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }

  searchProfileService(profile: { associateName: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials || '{}')['accessToken'];

    return this.http.get(URL+'/v1/searchprofile'+'?associateName='+profile.associateName,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  
  }

  constructor(private http: HttpClient) { }
}
