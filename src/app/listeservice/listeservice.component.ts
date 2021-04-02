import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { InsertService} from "../service/insert.service";

import { LoginService} from '../service/login.service';
@Component({
  selector: 'app-listeservice',
  templateUrl: './listeservice.component.html',
  styleUrls: ['./listeservice.component.css']
})
export class ListeserviceComponent implements OnInit {
  listeoffre=[];
  liste=[];
  arrayForfait:any=[];
  box:string[]=[];
  ErrorMessage1:string="";
  ErrorMessage:string="";
  div1:boolean=false;
  div2:boolean=false;
  div3:boolean=false;
  div4:boolean=false;
  div5:boolean=false;
  div6:boolean=false;
  constructor(private insert:InsertService,private token:LoginService) {
    token.ControlleToken();
   }
  ValiderForfait(){
    console.log("tailler "+this.arrayForfait.length);
    if(this.arrayForfait.length!=0){
      this.insert.insertForfait(this.arrayForfait).then(res=>{
        console.log(res);
      }).catch(err=>{
        this.token.TokenExp(err);
        this.ErrorMessage1=err;
      });
    }
  }
  deleteUtilisation(index:string ){ 
    this.arrayForfait.splice(index,1);
  }
  addUtilisation(offre:string,utilisation:string,valeur:string){
    let forfait={
      id_offre:offre,
      id_utilisation:utilisation,
      valeur:valeur
    }
    this.arrayForfait.push(forfait);
    console.log(this.arrayForfait);
  }
  ngOnInit(): void {
    this.GetListeUtilisation();
    this.ListeOffre();
  }
  onChange(e:any) {
    if(e.target.checked){
      this.box.push(e.target.value);
      console.log(this.box);
    }else{
      let i:number=0;
    }
}
  isEmpty(data:string):string{
    if(data==""){
      throw new Error("Champ ne peut pas etre vide");
    }
    else{
      return data;
    }
  }
  isEmptyAny(data:any):void{
    if(data===null){
      throw new Error("Champ ne peut pas etre vide");
    }
  }
  isNegatif(chiffre:number):void{
    if(chiffre<0){
      throw  new Error("La valeur ne peut pas etre negatif");
    }
  }
  ListeOffre():void{
    this.insert.GetListeOffre().then(res=>{
      console.log(res);
      this.listeoffre=res;
    }).catch(err=>{
      this.token.TokenExp(err);
      console.log(err);
    })
  }
  GetListeUtilisation():void{
    this.insert.GetListeUtilisation().then(res=>{
      this.liste=res;
      console.log("liste ambany");
      console.log(this.liste);
    }).catch(err=>{
      this.token.TokenExp(err);
      console.log(err);
    })
  }
  GenerateCredit(credit:NgForm){
    this.ErrorMessage1="";
    try{
      let montant=this.isEmpty(credit.controls['montant'].value);
      let val=parseInt(montant,10);
      this.isNegatif(val);
      console.log(montant);
      this.insert.insertCredit(val).then(res=>{
        console.log(res);
      }).catch(err=>{
        this.token.TokenExp(err);
        console.log(err);
        this.ErrorMessage1=err;
      });
    }catch(e){
      console.log(e);
      this.ErrorMessage1=e.message;
    }
    
  };
  
  InsertOffre(form:NgForm){
    try{
      
      let offre={
        id_offre:0,
        nom_offre:this.isEmpty(form.controls['nom_offre'].value),
        date_offre:'',
        validite:this.isEmpty(form.controls['validite'].value),
        prix_offre:parseInt(this.isEmpty(form.controls['prix'].value),10),
        utilisation:this.box
      };
      
      console.log(offre);
      this.insert.insertoffre(offre).then(res=>{
         console.log(res);
      }).catch(err=>{
         this.ErrorMessage=err;
      });
    }catch(e){
      console.log(e.message);
      this.ErrorMessage=e.message;
    }
   

  }
  showDiv(i:number){
    if(i==1){
     this.div1=true;
     this.div2=false;
     this.div3=false;
     this.div4=false;
     this.div5=false;
     this.div6=false;
    }if(i==2){
     this.div1=false;
     this.div2=true;
     this.div3=false;
     this.div4=false;
     this.div5=false;
     this.div6=false;
    }
    if(i==3){
     this.div1=false;
     this.div2=false;
     this.div3=true;
     this.div4=false;
     this.div5=false;
     this.div6=false;
    } if(i==4){
     this.div1=false;
     this.div2=false;
     this.div3=false;
     this.div4=true;
     this.div5=false;
     this.div6=false;
    } if(i==5){
     this.div1=false;
     this.div2=false;
     this.div3=false;
     this.div4=false;
     this.div5=true;
     this.div6=false;
    } if(i==6){
     this.div1=false;
     this.div2=false;
     this.div3=false;
     this.div4=false;
     this.div5=false;
     this.div6=true;
    }    
   console.log("number"+i);
  }
}
