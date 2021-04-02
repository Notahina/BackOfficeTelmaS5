import { Injectable } from '@angular/core';
import {BaseUrl} from './../../environments/environment';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { error } from 'selenium-webdriver';
import {AuthService} from '../service/auth.service';
@Injectable({
  providedIn: 'root'
})
export class InsertService {
  baseurl=BaseUrl.url;
  constructor(private http:HttpClient) { }
  httpOptions =new AuthService().formOption(true);
  GetListeCredit(){
    const url =this.baseurl+"credit/liste";
    return new Promise((resolve,reject)=>{
      this.http.get(url,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          resolve((val as any).data);
        }
      },error=>{
        reject(error)
      })
    });
  }
  GetListeForfai(){
    const url=this.baseurl+"offreforfait/liste";
    return new Promise((resolve,reject)=>{
      this.http.get(url,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          resolve((val as any).data);
        }
      },error=>{
        reject(error)
      })
    });
  }
  GetListeOffre():Promise<any>{
    const url=this.baseurl+"offre/liste";
    return new Promise((resolve,reject)=>{
      this.http.get(url,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          resolve((val as any).data);
        }
      },error=>{
        reject(error)
      })
    });
  }
  GetListeUtilisation():Promise<any>{
    const url=this.baseurl+"utilisation/liste";
    return new Promise((resolve,reject)=>{
      this.http.get(url,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          console.log("api :"+val);
          resolve((val as any).data);
        }
      },error=>{
        reject(error)
      })
    });
  }
  insertCredit(data:number):Promise<void>{
    const url=this.baseurl+"credit/generer/"+data;
    return new Promise((resolve,reject)  =>{
      this.http.post(url,"",this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          resolve((val as any));
        }
      },error=>{
        reject(error)
      })
    });
  }
  insertoffre(data:any):Promise<any>{
    const url=this.baseurl+"offre/insert";
    return new Promise((resolve,reject)  =>{
      this.http.post(url,data,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){
          resolve((val as any));
        }
      },error=>{
        reject(error)
      })
    });
  }
  insertForfait(data:any):Promise<string>{
    const url=this.baseurl+"offre/insertforfait";
    return new Promise((resolve,reject)=>{
      this.http.post(url, data,this.httpOptions).subscribe(val=>{
        if((val as any).status==200){

        }else{
          reject((val as any).message)
        }
      },error=>{
        reject(error)
      })
    });
  }
}
