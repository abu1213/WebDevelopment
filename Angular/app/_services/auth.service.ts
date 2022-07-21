import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public route:Router) { }
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
}
