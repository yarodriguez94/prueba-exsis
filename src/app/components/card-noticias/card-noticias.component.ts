import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-noticias',
  templateUrl: './card-noticias.component.html',
  styleUrls: ['./card-noticias.component.scss']
})
export class CardNoticiasComponent implements OnInit {

  @Input() noticias:any = {};
  @Input() index:number;

  constructor(private router:Router) {

    
  }
  
  ngOnInit(): void {
  }
  
  
  verNoticia(){
    
    this.router.navigate( [ '/noticias',this.index] );
    //console.log(this.noticias);
    
  }
  

}
