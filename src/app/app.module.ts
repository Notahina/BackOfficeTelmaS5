import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfilComponent } from './profil/profil.component';
import { ChartsModule } from 'ng2-charts';
import { ValidationComponent } from './validation/validation.component';
import { ListeserviceComponent } from './listeservice/listeservice.component';
import { NavservComponent } from './listeservice/navserv/navserv.component';
import { ListeoffreComponent } from './listeservice/listeoffre/listeoffre.component';
import { ListeforfaitComponent } from './listeservice/listeforfait/listeforfait.component';
import { ListecreditComponent } from './listeservice/listecredit/listecredit.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfilComponent,
    ValidationComponent,
    ListeserviceComponent,
    NavservComponent,
    ListeoffreComponent,
    ListeforfaitComponent,
    ListecreditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){}
  
}

