import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-createprofile',
  templateUrl: './createprofile.component.html',
  styleUrls: ['./createprofile.component.css']
})
export class CreateprofileComponent implements OnInit {

  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  mobilePattern = "^[7-9][0-9]{11}$";
  profile = {
    associateName: "",
    associateId: "",
    mobile: "",
    email:"",
    }

  constructor(private profileservice:ProfileService, private router: Router, private fb: FormBuilder) {
    this.create();
  }

  
  ngOnInit(): void {
    
}
  angForm: FormGroup;
  create() {

    this.angForm = this.fb.group({
      associateName: ['', Validators.required],
      associateId: ['', Validators.required, ],
      mobile: ['', [Validators.required, Validators.pattern(this.mobilePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      
    });

    const observable = this.profileservice.createProfile(this.profile)

    observable.subscribe(
      (Response: any) => {
        console.log(Response);
       alert("User Successfully Created Profile");
        //this.router.navigate(['signin']);
      },
      function (error) {
        console.log(error);
        alert("Something Went Wrong");
      }
    )
  }
  

}


