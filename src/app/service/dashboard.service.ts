import { Injectable } from '@angular/core';
import {BaseUrl} from './../../environments/environment';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { AuthService} from '../service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  baseurl=BaseUrl.url;
  constructor(private http:HttpClient) { }
  httpOptions = new AuthService().formOption(true);
  getDashBoard(data:any):Promise<any>{
    const url=this.baseurl+"offre/statistique/"+data.periode+"/"+data.date_offre+"/"+data.id_offre;
    console.log(url);
    return new Promise((resolve,reject)=>{
      this.http.get(url,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          console.log("data->"+(val as any).data);
          resolve((val as any).data);
        }
      },error=>{
        reject(error);
      })
    });
  }
  getOffre():Promise<any>{
    const url=this.baseurl+"offre/liste";
    return new Promise((resolve,reject)=>{
      this.http.get(url,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          console.log("data->"+(val as any).data);
          resolve((val as any).data);
        }
      },error=>{
        reject(error);
      })
    });
  }
}
