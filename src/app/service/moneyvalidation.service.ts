import { Injectable } from '@angular/core';
import {BaseUrl} from './../../environments/environment';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { error } from '@angular/compiler/src/util'; 
import {AuthService} from '../service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class MoneyvalidationService {
  baseurl=BaseUrl.url;
  httOption=new AuthService().formOption(true);
  constructor(private http:HttpClient) { }
  
  ValiderTransation(idmouvement:string):void{
    const url=this.baseurl+"money/valide/"+idmouvement;
    console.log(url);
    this.http.put(url,"",this.httOption)
    .subscribe(valiny => console.log((valiny as any).data));
  }
  getMoneyNonValide():Promise<any>{
    const url=this.baseurl+"money/nonvalide";
    return new Promise((resolve,reject)=>{
      this.http.get(url,this.httOption).subscribe(valiny=>{
        if((valiny as any).status==200){
          resolve((valiny as any).data);
        }else{
          reject((valiny as any).message);
        }
      },error=>{
        console.log(error);
        reject(error);
        
      });
    });
  }
}
