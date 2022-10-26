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
  mobilePattern = "^[7-9][0-9]{9}$";
  idPattern="^[0-9a-zA-Z]{5,30}$";
  profile = {
    name: "",
    associateId: "",
    mobile: 91,
    email:"",
    skillSet:""
    
  }
  profile1= {
    name: "",
    associateId: "",
    mobile: 0,
    email:"",
    skillSet:[""]
    
    }



  constructor(private profileservice:ProfileService, private router: Router, private fb: FormBuilder) {
    this.create();
  }

  
  ngOnInit(): void {
    
}
  angForm: FormGroup;
  create() {

    this.angForm = this.fb.group({
      name: ['', Validators.required],
      associateId: ['', Validators.required, Validators.pattern(this.idPattern)],
      mobile: ['', [Validators.required, Validators.pattern(this.mobilePattern)]],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      skillSet: ['', Validators.required],
    });

    this.profile1.name=this.profile.name;
    this.profile1.associateId=this.profile.associateId;
    this.profile1.mobile=this.profile.mobile;
    this.profile1.email=this.profile.email;
    const result: any[] = [];
    result[0]=this.profile.skillSet;
   this.profile1.skillSet=result;

    const observable = this.profileservice.createProfile(this.profile1)

    observable.subscribe(
      (Response: any) => {
        console.log(Response);
       alert("User Successfully Registered");
        this.router.navigate(['signin']);
      },
      function (error) {
        alert("Please Create the Profile");
      }
    )
  }
  

}


