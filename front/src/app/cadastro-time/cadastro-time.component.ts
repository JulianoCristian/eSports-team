import { Component, OnInit } from '@angular/core';
import { TimeComponent } from '../time/time.component';
import { TimeService } from '../time/time.service.component';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-time',
  templateUrl: './cadastro-time.component.html',
  styleUrls: ['./cadastro-time.component.css']
})
export class CadastroTimeComponent implements OnInit {

  time: TimeComponent = new TimeComponent();

  constructor(private service: TimeService, private router: ActivatedRoute) {
    this.service = service;
    this.router = router;
  }

  ngOnInit() {
  }

  cadastrar(){
    this.service.cadastrar(this.time)
      .then(res => {
        this.time = new TimeComponent;
        console.log('Deu certo!')
      })
      .catch(erro => {
        console.log('Deu erro!')
      })
    }
  }
