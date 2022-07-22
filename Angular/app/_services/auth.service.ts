import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public route:Router,private http:HttpClient) { }
   isAuthenticated():boolean{
    if(sessionStorage.getItem("token")!==null){
      return true
    }
    return false
  }
  canAccess(){
    if(!this.isAuthenticated()){
      this.route.navigate(["/login"])
    }
  }
  register(name:string,email:string,password:string){
    return this.http
    .post<{idToken:string}>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmtXBLLxmFtNKN6xocz5n-nnBeGjy-zno",
    {displayName:name,email,password}
    )
  }
  storeToken(token:string){
    sessionStorage.setItem('token',token)
  }
}
