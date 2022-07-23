import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formdata = {email:"",password:""}
  submit = false  
  errorMessage=""
  loading=false
  
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
    this.auth.canAuthenticate();
  }
  onSubmit(){
    this.loading=true
    this.auth.login(this.formdata.email,this.formdata.password).subscribe({
      next:data=>{
        this.auth.storeToken(data.idToken)
        this.auth.canAuthenticate();
    }}).add(()=>{
      this.loading=false
    })
  }
}
