import { Injectable } from '@angular/core';
import { Article } from './home/article';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
 
  private dbPath = '/articles';
 
  articlesRef: AngularFirestoreCollection<Article> = null;
 
  constructor(private db: AngularFirestore) {
    this.articlesRef = db.collection(this.dbPath);
  }
 
  createCustomer(article: Article): void {
    this.articlesRef.add({...article});
  }
 
  updateCustomer(key: string, value: any): Promise<void> {
    return this.articlesRef.doc(key).update(value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.articlesRef.doc(key).delete();
  }
 
  getCustomersList(): AngularFirestoreCollection<Article> {
    return this.articlesRef;
  }
 
  deleteAll() {
    this.articlesRef.get().subscribe(
      querySnapshot => {
        querySnapshot.forEach((doc) => {
          doc.ref.delete();
        });
      },
      error => {
        console.log('Error: ', error);
      });
  }
}