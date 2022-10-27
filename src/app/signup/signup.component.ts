import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})


export class SignupComponent implements OnInit {
  emailPattern = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  user = {
    username: "",
    email: "",
    password: "",
    role:""
    
  }
  
  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.signup();
  }

  
  ngOnInit(): void {
    
}
  angForm: FormGroup;
  signup() {

    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(this.emailPattern)]],
      role: ['', Validators.required],
    })

    const observable = this.userService.signupService(this.user)

    observable.subscribe(
      (Response: any) => {
        console.log(Response);
       alert("User Successfully Registered");
        this.router.navigate(['signin']);
      },
      function (error) {
        alert("Please Complete the Registeration");
      }
    )
  }
  

}


