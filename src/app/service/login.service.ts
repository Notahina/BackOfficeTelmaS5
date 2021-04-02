import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {BaseUrl} from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseurl=BaseUrl.url;
  constructor(private router:Router,private http:HttpClient) { }
    httpOptions = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        "Accept":"application/json"
      })
    }
    public TokenExp(erreur:string){
      if(erreur==="999"){
        localStorage.clear();
        this.router.navigate(['']);
      }
    }
  ControlleToken():void{
    console.log("token"+localStorage.getItem("token"));
    if(localStorage.getItem("token")===null){
        this.router.navigate(['']); 
    }
  }
  LogIn(data:any):Promise<string>{
    const url=this.baseurl+"admin/login";
    console.log(url);
    return new Promise((resolve,reject)=>{
      this.http.post(url,JSON.stringify(data),this.httpOptions)
      .subscribe(valiny=>{
       // console.log(valiny);
        if((valiny as any).status==200){
          console.log("Token");
          resolve((valiny as any).data);
        }else{
          reject((valiny as any).message);
        }
      },error=>{
        console.log(error);
          reject("Erreur de connection.");
      })
    });
  }
  
}
