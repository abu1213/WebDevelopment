import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public route:Router,private http:HttpClient) { }
   isAuthenticated():boolean{
    if(localStorage.getItem("token")!==null){
      return true
    }
    return false
  }
  canAccess(){
    if(!this.isAuthenticated()){
      this.route.navigate(["/login"])
    }
  }
  canAuthenticate(){
    if(this.isAuthenticated()){
      this.route.navigate(["/dashboard"])
    }
  }
  register(name:string,email:string,password:string){
    return this.http
    .post<{idToken:string}>("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmtXBLLxmFtNKN6xocz5n-nnBeGjy-zno",
    {displayName:name,email,password}
    )
  }
  storeToken(token:string){
    localStorage.setItem('token',token)
  }

  login(email:string,password:string){
    return this.http
    .post<{idToken:string}>("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmtXBLLxmFtNKN6xocz5n-nnBeGjy-zno",
    {email,password}
    )
  }
}
