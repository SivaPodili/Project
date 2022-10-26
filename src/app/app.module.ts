import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './component/forms/forms.component';
import { SignupComponent } from './signup/signup.component';
import { HeadersComponent } from './headers/headers.component';
import { Route, RouterModule } from '@angular/router';
import { CreateprofileComponent } from './createprofile/createprofile.component';
import { SearchprofileComponent } from './searchprofile/searchprofile.component';



const routes:Route []=[
  
  {path:'signin', component:FormsComponent},
  {path:'signup', component:SignupComponent},
  {path:'createprofile', component:CreateprofileComponent},
  {path:'searchprofile', component:SearchprofileComponent},
 
 
];
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    SignupComponent,
    HeadersComponent,
    CreateprofileComponent,
    SearchprofileComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
     ReactiveFormsModule,
    RouterModule.forRoot(routes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
