import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule, AngularFirestore } from '@angular/fire/firestore'; 
import { FirestoreSettingsToken } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';  
import { AuthService } from './auth.service';
import { CheckFormService } from './check-form-service.service';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ChatComponent } from './chat/chat.component';
import { CreateArticleComponent } from './create-article/create-article.component';
import { AuthComponent } from './auth/auth.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';


const routes: Routes = [
  { path: 'chat', component: ChatComponent, pathMatch: 'full' },
  { path: '', component: HomeComponent,pathMatch: 'full'},
  { path: 'about',component: AboutComponent,pathMatch: 'full'},
  { path: 'reg',component: AuthComponent,pathMatch: 'full'},
  { path: 'reg/createPost',component: CreateArticleComponent,pathMatch: 'full'}
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
    ArticleDetailComponent,
    ArticleListComponent
  ],
  imports: [
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule, 
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    FormsModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
  ],
  providers: [AuthService,{ provide: FirestoreSettingsToken, useValue: {} },CheckFormService,AuthComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
