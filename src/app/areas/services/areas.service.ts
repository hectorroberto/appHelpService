import { Injectable } from '@angular/core';
import { Firestore } from 'src/app/core/classes/firestore.class';
import { Areas } from '../Models/areas.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AreasService extends Firestore<Areas>{

  constructor(private authService: AuthService, db: AngularFirestore) {
    super(db);
    this.init();
  }

  private init(): void {
    this.authService.authState$.subscribe(user => {
      if (user) {
        // this.setCollection('/users/${user.uid}/areas')
        this.setCollection(`/areas/`);
        return;
      }
      this.setCollection(null);
    });
  }
}
