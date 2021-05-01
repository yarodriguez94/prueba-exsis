import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceApiService } from 'src/app/services/service-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dataNoticias:any[];
  constructor(private noticiasService:ServiceApiService,
              private router:Router) {

    this.noticiasService.getData().subscribe( (res:any) => {

      this.dataNoticias = res;
      //console.log(this.dataNoticias[0]);
      
    })
    
   }


   verNoticia(idx:number){

    console.log(idx);
    this.router.navigate( [ '/noticias',idx] );

   }
  ngOnInit(): void {
  }

}
