import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../service/login.service';
import { InsertService} from "../../service/insert.service";
@Component({
  selector: 'app-listecredit',
  templateUrl: './listecredit.component.html',
  styleUrls: ['./listecredit.component.css']
})
export class ListecreditComponent implements OnInit {
  credit:any=[];
  constructor(private insert:InsertService,private token:LoginService) { }

  ngOnInit(): void {
    this.token.ControlleToken();
    this.GetCredit();
  }
  GetCredit(){
    this.insert.GetListeCredit()
    .then(res=>{
      console.log("credit :");
      console.log(res);
      this.credit=res;
    })
    .catch(err=>{
      this.token.TokenExp(err);
      console.log(err);
    });
  }
}
