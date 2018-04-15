import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import 'bootstrap';
// import * as $ from 'jquery/dist/jquery.min.js';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  mostraFormLogin() {
    $('#exampleModal').modal('show');
  }

  ngOnInit() {
  }

}
