import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class DbService {
  constructor(private db: AngularFirestore) {}

  getObserver(dbname:string) {
    return this.db.firestore.collection(dbname);
  }
}
