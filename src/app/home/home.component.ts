import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AuthComponent } from '../auth/auth.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private af : AuthService, public ac : AuthComponent) { }
  regValid = this.ac.register;
  ngOnInit() { 
  }
  logout(){
    this.af.signOut();
    this.regValid  = false;
  }
}
