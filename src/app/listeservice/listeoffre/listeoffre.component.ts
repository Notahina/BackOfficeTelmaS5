import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../service/login.service';
import { InsertService} from "../../service/insert.service";
@Component({
  selector: 'app-listeoffre',
  templateUrl: './listeoffre.component.html',
  styleUrls: ['./listeoffre.component.css']
})
export class ListeoffreComponent implements OnInit {

  listeoffre=[];
  constructor(private insert:InsertService,private token:LoginService) { }

  ngOnInit(): void {
    this.token.ControlleToken();
    this.ListeOffre();
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
}
