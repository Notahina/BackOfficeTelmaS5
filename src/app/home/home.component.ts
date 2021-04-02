import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Chart } from 'chart.js';
import {DashboardService} from '../service/dashboard.service';

import { LoginService} from '../service/login.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tabledash=[];
  nbre:any[]=[];
  date:any[]=[];
  nom_offre:string="";
  valeur:number=0;
  constructor(private dash:DashboardService,private token:LoginService) {
    token.ControlleToken();
    this.getListeoffe();
   }
  data1:any;
  listes=[];
  ngOnInit(): void {
    
  }

  getListeoffe(){
    this.dash.getOffre().then(res=>{
      this.listes=res;
      console.log(this.listes);
    }).catch(eer=>{
      console.log(eer);
      this.token.TokenExp(eer);
    });  
  }
  getOffreDonne(form:NgForm):any{
    
    let data={
      date_offre:form.controls['date'].value,
      periode:form.controls['periode'].value,
      id_offre:form.controls['listeoffre'].value
    }
    console.log(data);
    let label:string="";
    let valeur:any[]=[];
    let datevaleur:any[]=[];
    this.dash.getDashBoard(data).then(res=>{
      console.log(res);
      this.tabledash=res;
      for(const chart of res){
        label=chart.nom_offre;
        valeur.push(chart.valeur);
        datevaleur.push(chart.dates);
        console.log(this.nbre);
        console.log(datevaleur);  
      }

    //CHART-------------------------------------------------------
          var myChart = new Chart("Chart", {
            type: 'bar',
            data: {
                labels: datevaleur,
                datasets: [{
                    label: "Offre:",
                    data: valeur,
                    backgroundColor: [
                       
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                    
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    }).catch(err=>{
      console.log(err);
    });
  }
  
}
