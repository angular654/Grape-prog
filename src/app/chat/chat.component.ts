import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  itemValue = '';
  user  = '';
  auth = false;
  items: Observable<any[]>;
  constructor(public db : AngularFireDatabase, public af : AuthService){
    this.items = db.list('items').valueChanges();
  }

  ngOnInit() { }
  onSubmit() {
    this.db.list('items').push({ content: this.itemValue });
    this.db.list('users').push({ content: this.user });
  }
  login (){
    this.af.doGoogleLogin().finally;
    this.auth = true;
    this.user = this.af.getUser();
  }

}
