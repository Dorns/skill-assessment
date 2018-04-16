import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'; 
import 'bootstrap';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService) { }
  
  ngOnInit() {
  }

}
