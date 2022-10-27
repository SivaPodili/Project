import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-searchprofile',
  templateUrl: './searchprofile.component.html',
  styleUrls: ['./searchprofile.component.css']
})
export class SearchprofileComponent implements OnInit {


  uiResponse: any;
  showTable: boolean = false;
  profile = {
    associateName: "",
  }


  searchprofile() {
    const observable = this.profileService.searchProfileService(this.profile)
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        this.uiResponse = Response;
        this.showTable = true;
      },
      function (error) {
        alert("Something went wrong Please try again")
      }
    )
  }


  constructor(private profileService: ProfileService, private router: Router) { }

  ngOnInit(): void {
  }



}

