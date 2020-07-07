import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, observable } from 'rxjs';
import { AuthService } from '../auth.service';
import * as moment from 'moment';
import { Message } from './message'



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  itemValue: string = '';
  user = '';
  auth = false;
  msgdate : any;
  items: Observable<Message[]>;
  
  constructor(private db: AngularFireDatabase, private af: AuthService) {
     this.items = this.db.list('items').valueChanges() as Observable<Message[]>;
  }
  ngOnInit() {
  }
  onSubmit() {
    this.msgdate = moment().format('LLL');
    const message: Message = {
      user: this.user, 
      content: this.itemValue,
      date: this.msgdate
    };
    this.db.list('items').push(message);
    return true;
  }
  login() {
    this.af.doGoogleLogin();
    this.user = this.af.getUser();
    this.auth = true;
  }
}
