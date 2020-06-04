import { Component, OnInit } from '@angular/core';
import {CheckFormService} from '../check-form-service.service'
@Component({
  selector: 'app-email-sender',
  templateUrl: './email-sender.component.html',
  styleUrls: ['./email-sender.component.css']
})
export class EmailSenderComponent implements OnInit {
  email : string;
  constructor(private validator : CheckFormService) { }

  ngOnInit() {
  }
   Check(){
     if (this.validator.checkEmail(this.email)){
      alert('Вы подписались на нашу рассылку!');
     } else {
      alert("Неверный email! Попробуйте еще раз");
      return false
     }
   }
}
