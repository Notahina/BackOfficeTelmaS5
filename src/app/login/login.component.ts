import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService} from '../service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  ErrorMessage:string="";
  
  constructor( private router:Router,private loginService:LoginService ) { }

  ngOnInit(): void {

  }
  isEmpty(data:string):string{
    if(data==""){
      throw new Error("Champ ne peut pas etre vide");
    }
    else{
      return data;
    }
  }
  
  LoginForm(myform:NgForm):void{
    try{
      let User={
        login:this.isEmpty(myform.controls['login'].value),
        mdp:this.isEmpty(myform.controls['Pwd'].value)
      }
      console.log(User);
      this.loginService.LogIn(User).then(res=>{
        localStorage.setItem("token",res);
        console.log("token->"+res);
        this.router.navigate(['/home']);
      }).catch(err=>{
        this.ErrorMessage=err;
        console.log(err);
      });
    }catch(e){
      console.log(e.message);
      this.ErrorMessage=e.message;
    }
    
  }
}
