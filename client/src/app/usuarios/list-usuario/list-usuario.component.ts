import { Component, OnInit, Input } from '@angular/core';

import { Usuario } from './../usuario';

@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  @Input() usuario: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
