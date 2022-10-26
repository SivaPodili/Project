import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  user = {
    username: "",
    password: ""
  }
  angForm: FormGroup;

  save() {
    // console.log(this.Username);
    // console.log(this.Password)
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    const observable = this.userService.signinUser(this.user);
    observable.subscribe(
      (Response: any) => {
        console.log(Response);
        alert("User Successfully Signed")
        sessionStorage.setItem('credentials', JSON.stringify(Response));
       // this.router.navigate(['createbook']);

      },
      function (error) {
        alert("Please Signin");
      }
    )

  }

  constructor(private userService: UserService, private router: Router, private fb: FormBuilder) {
    this.save();
  }

  ngOnInit(): void {
  }

}
