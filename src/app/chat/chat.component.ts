import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import * as moment from 'moment';
import { analytics } from 'firebase';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  itemValue = '';
  user  = '';
  auth = false;
  msgdate = moment().calendar();
  items: Observable<any[]>;

  constructor(private db : AngularFireDatabase, private af : AuthService){
    this.items = db.list('items').valueChanges();
  }
  ngOnInit() {
   }
  onSubmit() {
    if (grecaptcha.getResponse() == ""){
      return false;
    } 
      else {
      this.db.list('items').push({ content: this.user + '$' + this.itemValue});
      grecaptcha.reset();
    }
  }
  login (){
    if (grecaptcha.getResponse() == ""){
      return false;
    } 
      else {
          if(confirm("Вы вошли в чат!"+this.msgdate)){
            this.af.doGoogleLogin();
            this.user = this.af.getUser();
            this.auth = true;
          } 
      else {
        this.auth = false;
      }

    } 
  }
}
