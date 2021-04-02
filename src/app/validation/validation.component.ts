import { Component, OnInit } from '@angular/core';
import { MoneyvalidationService} from '../service/moneyvalidation.service';
import { Router } from '@angular/router';
import { LoginService} from '../service/login.service';
@Component({
  selector: 'app-validation',
  templateUrl: './validation.component.html',
  styleUrls: ['./validation.component.css']
})
export class ValidationComponent implements OnInit {
  tablerow=[];
  erreur="";
  constructor(private money:MoneyvalidationService,private token:LoginService,private router:Router) {
    token.ControlleToken();
   }

  ngOnInit(): void {
    this.getListeNonValide();
  }
  
  Valider(idmouvement:string):void{
    console.log("mouvemenet "+idmouvement  );
    this.money.ValiderTransation(idmouvement);
   
  }
  getListeNonValide():void{
    this.money.getMoneyNonValide().then(res=>{
      this.tablerow=res;
    }).catch(err=>{
      this.token.TokenExp(err);
      console.log(err.message);
      this.erreur=err.message;
    });
  }
}
