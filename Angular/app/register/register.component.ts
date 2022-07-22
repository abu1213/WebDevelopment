import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  formdata = {name:"",email:"",password:""}
  submit = false  
  errorMessage=""
  loading=false
  
  constructor(public auth:AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log(this.formdata)
    this.loading=true
    this.auth.register(this.formdata.name,this.formdata.email,this.formdata.password)
    .subscribe({
      next:data=>{
        this.auth.storeToken(data.idToken)
      },
      error:data=>{
        if(data.error.error.message=="INVALID EMAIL"){
          this.errorMessage="Invalid Email"
        }
      }
    }).add(()=>{
      this.loading=false
    })
    ;
  }
}
