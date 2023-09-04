import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {
  //add de dependencias
  constructor() {}

  // método de callback para chamar todas as informações quando com componentes estiverem carregadas
  ngOnInit(): void {
      
  }

}
