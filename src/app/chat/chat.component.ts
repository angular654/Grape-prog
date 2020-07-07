import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
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
  items: Observable<any[]>;


  constructor(private db: AngularFireDatabase, private af: AuthService) {
    this.items = this.db.list('items').valueChanges();
  }
  ngOnInit() {
  }
  onSubmit(message: Message) {
    this.msgdate = moment().format('LLL');
    this.db.list('items').push({ 
      user: this.user, 
      content: this.itemValue,
      date: this.msgdate
    });
    return true;
  }
  login() {
    this.af.doGoogleLogin();
    this.user = this.af.getUser();
    this.auth = true;
  }
}
