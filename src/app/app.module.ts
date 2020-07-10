import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore'; 
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';  
import { RecaptchaModule } from 'ng-recaptcha';
import { AuthService } from './services/auth.service';
import { CheckFormService } from './services/check-form-service.service';
import { HttpModule } from '@angular/http';
import {AngularFireModule} from '@angular/fire'

import { AppRoutingModule } from './app-routing.module';
import { NgxAutoScrollModule } from "ngx-auto-scroll";
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthComponent } from './auth/auth.component';
import { EmailSenderComponent } from './email-sender/email-sender.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FirebaseService } from './services/firebase.service';

const routes: Routes = [
  { path: 'chat', component: ChatComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent,pathMatch: 'full'},
  { path: 'about',component: AboutComponent,pathMatch: 'full'},
  { path: 'reg',component: AuthComponent,pathMatch: 'full'},
  { path: 'reg/createPost',component: CreateArticleComponent,pathMatch: 'full'},
  { path: 'sender',component: EmailSenderComponent,pathMatch: 'full'},
];
const firebaseConfig = {
  apiKey: 'AIzaSyCyoRLATBuyGxIv3Zw3glOQUzUqNaju_zE',
  authDomain: 'grapeprogchatapp.firebaseapp.com',
  databaseURL: 'https://grapeprogchatapp.firebaseio.com',
  storageBucket: 'grapeprogchatapp.appspot.com',
  messagingSenderId: '943056497421',
  projectId: "grapeprogchatapp",
  appId: "1:943056497421:web:153f5785af2d21b0ad5e44",
  measurementId: "G-XY15XYK63Z"
}
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ChatComponent,
    CreateArticleComponent,
    AuthComponent,
    EmailSenderComponent,
  ],
  imports: [
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule, 
    RecaptchaModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    DragDropModule,
    NgxAutoScrollModule,
    PickerModule,
    EmojiModule,
  ],
  providers: [
    FirebaseService,
    AuthService,
    CheckFormService,
    AuthComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
