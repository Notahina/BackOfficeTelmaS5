import { Component, OnInit } from '@angular/core';
import { LoginService} from '../../service/login.service';
import { InsertService} from "../../service/insert.service";
@Component({
  selector: 'app-listeforfait',
  templateUrl: './listeforfait.component.html',
  styleUrls: ['./listeforfait.component.css']
})
export class ListeforfaitComponent implements OnInit {
  forfait:any=[];
  page = 1;
  count = 0;
  tableSize = 7;
  tableSizes = [3, 6, 9, 12];
  constructor(private insert:InsertService,private token:LoginService) { }
  
  ngOnInit(): void {
    this.token.ControlleToken();
    this.GetListeForfait();
  }
  GetListeForfait():void{
    this.insert.GetListeForfai()
    .then(res=>{
      console.log("forfait ");
      console.log(res);
      this.forfait=res;
    })
    .catch(err=>{
      this.token.TokenExp(err);
      console.log(err);
    });
  }
  onTableDataChange(event:any){
    this.page = event;
    this.GetListeForfait();
  }  
  onTableSizeChange(event:any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.GetListeForfait();
  }  
}
