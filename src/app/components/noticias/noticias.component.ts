import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceApiService } from 'src/app/services/service-api.service';
@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss'],
})
export class NoticiasComponent implements OnInit {
  idParam: number;
  dataNoticia: any = {};

  constructor(
    private activatedRouter: ActivatedRoute,
    private noticiasService: ServiceApiService
  ) {
    this.activatedRouter.params.subscribe((params) => {
      this.dataNoticia = this.noticiasService
        .getData()
        .subscribe((res: any) => {
          this.dataNoticia = res[params['id']];
        });
    });
  }

  ngOnInit(): void {}
}
