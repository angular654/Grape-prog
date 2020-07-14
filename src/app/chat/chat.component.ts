import { Component, OnInit } from '@angular/core';
import { Observable,} from 'rxjs';
import { FirebaseService } from '../services/firebase.service'
import { AuthService } from '../services/auth.service';
import * as moment from 'moment';
import { Message } from '../models/message'



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
  
  constructor(public fire : FirebaseService, public af : AuthService) {
     this.items = fire.createlist('items').valueChanges() as Observable<Message[]>
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
    this.fire.create('items',message);
    return true;
  }
  login() {
    this.af.doGoogleLogin();
    this.user = this.af.getUser();
    this.auth = true;
  }
}
